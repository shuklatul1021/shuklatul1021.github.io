import React from 'react';

interface ComplexityAnalysisProps {
  timeComplexity: string;
  spaceComplexity: string;
}

export const ComplexityAnalysis: React.FC<ComplexityAnalysisProps> = ({
  timeComplexity,
  spaceComplexity,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Complexity Analysis</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-500">Time Complexity</h4>
          <p className="mt-1 text-sm text-gray-900">{timeComplexity}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-500">Space Complexity</h4>
          <p className="mt-1 text-sm text-gray-900">{spaceComplexity}</p>
        </div>
      </div>
    </div>
  );
};