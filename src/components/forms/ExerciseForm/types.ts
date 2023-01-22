import { ReactNode } from 'react';
import { exerciseTypes } from './constants';

export type ExerciseType = keyof typeof exerciseTypes;

export type ExerciseIconMappingType = {
  [key in exerciseTypes]: ReactNode;
};

export interface ExerciseSet {
  weight?: number;
  reps?: number;
  distance?: number;
  duration?: number;
}

/**
 * Keep track of hydration
 */
export interface ExerciseFormValues {
  name: string;
  type: ExerciseType;

  units: string;
  calories?: number;

  sets: ExerciseSet[];
}
