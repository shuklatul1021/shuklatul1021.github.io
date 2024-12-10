import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CodeEditor } from '../components/problem/CodeEditor';
import { TestCases } from '../components/problem/TestCases';
import { ComplexityAnalysis } from '../components/problem/ComplexityAnalysis';
import { ProblemDescription } from '../components/problem/ProblemDescription';
import { LanguageSelector } from '../components/problem/LanguageSelector';
import { SubmissionStatus } from '../components/problem/SubmissionStatus';
import { problems } from '../data/problems';
import { useCodeSubmission } from '../lib/hooks/useCodeSubmission';
import { SupportedLanguage } from '../lib/constants/languages';
import { Submission } from '../types';

export const Problem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const problem = problems.find(p => p.id === id);
  const [language, setLanguage] = useState<SupportedLanguage>('python');
  const [code, setCode] = useState(problem?.starterCode[language] || '');
  const [lastSubmission, setLastSubmission] = useState<Submission>();
  const { results, isSubmitting, submitCode } = useCodeSubmission(id || '');

  if (!problem) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Problem not found</h2>
        </div>
      </div>
    );
  }

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage);
    setCode(problem.starterCode[newLanguage]);
  };

  const handleSubmit = async () => {
    const submission = await submitCode(code, language, problem.testCases);
    setLastSubmission(submission);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <ProblemDescription problem={problem} />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <LanguageSelector value={language} onChange={handleLanguageChange} />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Running Tests...' : 'Submit Solution'}
            </button>
          </div>
          <CodeEditor
            code={code}
            language={language}
            onChange={setCode}
          />
        </div>

        {lastSubmission && <SubmissionStatus submission={lastSubmission} />}
        <TestCases testCases={problem.testCases} results={results} />
        <ComplexityAnalysis
          timeComplexity={problem.timeComplexity}
          spaceComplexity={problem.spaceComplexity}
        />
      </div>
    </div>
  );
};