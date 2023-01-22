import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { Workout } from 'types/exercises';

interface WorkoutRegistryState {
  workouts: Workout[];
  addWorkout: (entry: Workout) => void;
  removeWorkout: (targetSessionId: string) => void;
}

export const useWorkoutRegistryStore = create<WorkoutRegistryState>()(
  devtools(
    persist(
      (set, get) => ({
        workouts: [],
        addWorkout: (workout: Workout) =>
          set((state) => ({
            ...state,
            workouts: [...state.workouts, workout]
          })),
        removeWorkout: (targetSessionId: string) => {
          set((state) => {
            const updatedWorkouts = state.workouts.filter(
              ({ sessionId }) => sessionId != targetSessionId
            );
            return {
              ...state,
              workouts: updatedWorkouts
            };
          });
        }
      }),
      {
        name: 'workout-storage',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
);
