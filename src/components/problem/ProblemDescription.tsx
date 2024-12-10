import React from 'react';
import { Problem } from '../../types';
import { Badge } from '../ui/Badge';

interface ProblemDescriptionProps {
  problem: Problem;
}

export const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-gray-900">{problem.title}</h1>
          <Badge variant={problem.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'}>
            {problem.difficulty}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-gray-500">{problem.category}</p>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold">Problem Description</h2>
        <p className="whitespace-pre-wrap">{problem.description}</p>

        <h3 className="text-lg font-semibold">Examples</h3>
        <div className="space-y-4">
          {problem.examples.map((example, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Input:</strong> {example.input}</p>
              <p><strong>Output:</strong> {example.output}</p>
              {example.explanation && (
                <p><strong>Explanation:</strong> {example.explanation}</p>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold">Constraints</h3>
        <ul>
          {problem.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};