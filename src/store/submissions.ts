import { create } from 'zustand';
import { Submission } from '../types';

interface SubmissionsState {
  submissions: Submission[];
  addSubmission: (submission: Submission) => void;
}

export const useSubmissionsStore = create<SubmissionsState>((set) => ({
  submissions: [],
  addSubmission: (submission) =>
    set((state) => ({
      submissions: [submission, ...state.submissions],
    })),
}));