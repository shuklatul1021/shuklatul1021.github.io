import React from 'react';
import { TestCase } from '../../types';

interface TestCasesProps {
  testCases: TestCase[];
  results?: boolean[];
}

export const TestCases: React.FC<TestCasesProps> = ({ testCases, results }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Test Cases</h3>
      <div className="space-y-2">
        {testCases.map((testCase, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Input:</h4>
                <pre className="mt-1 text-sm text-gray-900">{testCase.input}</pre>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Expected Output:</h4>
                <pre className="mt-1 text-sm text-gray-900">{testCase.output}</pre>
              </div>
            </div>
            {results && (
              <div className="mt-2 flex items-center">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    results[index] ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <span className="ml-2 text-sm text-gray-600">
                  {results[index] ? 'Passed' : 'Failed'}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};