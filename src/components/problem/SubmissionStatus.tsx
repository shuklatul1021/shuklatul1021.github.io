import React from 'react';
import { Submission } from '../../types';

interface SubmissionStatusProps {
  submission: Submission;
}

export const SubmissionStatus: React.FC<SubmissionStatusProps> = ({ submission }) => {
  const statusColors = {
    'Accepted': 'bg-green-100 text-green-800',
    'Wrong Answer': 'bg-red-100 text-red-800',
    'Time Limit Exceeded': 'bg-yellow-100 text-yellow-800',
    'Runtime Error': 'bg-red-100 text-red-800',
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500">Status</h4>
          <span className={`inline-block mt-1 px-2 py-1 rounded-full text-sm font-medium ${statusColors[submission.status]}`}>
            {submission.status}
          </span>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Language</h4>
          <p className="mt-1 text-sm text-gray-900">{submission.language}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Runtime</h4>
          <p className="mt-1 text-sm text-gray-900">{submission.runtime} ms</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Memory</h4>
          <p className="mt-1 text-sm text-gray-900">{submission.memory} KB</p>
        </div>
      </div>
    </div>
  );
};