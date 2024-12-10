import { TestCase } from '../../types';

export const executeCode = async (
  code: string,
  language: string,
  testCases: TestCase[]
): Promise<boolean[]> => {
  // Simulate code execution with random results
  await new Promise(resolve => setTimeout(resolve, 1500));
  return testCases.map(() => Math.random() > 0.3);
};