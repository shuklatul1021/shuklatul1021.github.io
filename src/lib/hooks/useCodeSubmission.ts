import { useState } from 'react';
import { TestCase, Submission } from '../../types';
import { useSubmissionsStore } from '../../store/submissions';
import { SupportedLanguage } from '../constants/languages';

export function useCodeSubmission(problemId: string) {
  const [results, setResults] = useState<boolean[]>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addSubmission = useSubmissionsStore((state) => state.addSubmission);

  const submitCode = async (code: string, language: SupportedLanguage, testCases: TestCase[]) => {
    setIsSubmitting(true);
    try {
      // Simulate API call and code execution
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate test results
      const testResults = testCases.map(() => Math.random() > 0.3);
      setResults(testResults);

      // Create submission record
      const submission: Submission = {
        id: Math.random().toString(36).substr(2, 9),
        problemId,
        userId: '1', // In a real app, get from auth context
        code,
        language,
        status: testResults.every(r => r) ? 'Accepted' : 'Wrong Answer',
        runtime: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 1000),
        timestamp: Date.now(),
      };

      addSubmission(submission);
      return submission;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    results,
    isSubmitting,
    submitCode
  };
}