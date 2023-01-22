import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { Exercise, Workout, WorkoutFormValues } from 'types/exercises';

interface WorkoutSession extends WorkoutFormValues {
  setDate: (date: string) => void;
  addExercise: (entry: Exercise) => void;
  removeExercise: (targetSessionId: string) => void;
  resetState: () => void;
}

export const useWorkoutSessionStore = create<WorkoutSession>()(
  devtools(
    persist(
      (set, get) => ({
        setDate: (date: string) =>
          set((state) => ({
            ...state,
            date
          })),
        exercises: [],
        addExercise: (exercise: Exercise) =>
          set((state) => ({
            ...state,
            exercises: [...state.exercises, exercise]
          })),
        removeExercise: (targetSessionId: string) => {
          set((state) => {
            const updatedExercises = state.exercises.filter(
              ({ sessionId }) => sessionId != targetSessionId
            );
            return {
              ...state,
              exercises: updatedExercises
            };
          });
        },
        resetState: () => {
          set(({ date, ...state }) => {
            const resetState = { ...state, exercises: [] };
            return resetState;
          });
        }
      }),
      {
        name: 'workout-session-storage',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
);
