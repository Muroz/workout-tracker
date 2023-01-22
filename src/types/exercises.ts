import { FC, SVGProps } from 'react';
import { ExerciseFormValues } from '@components/forms/ExerciseForm/types';
import { exerciseTypes } from '../constants';

export type ExerciseIconMappingType = {
  [key in exerciseTypes]: FC<SVGProps<SVGSVGElement>>;
};

export interface WorkoutFormValues {
  date?: string;
  exercises: Exercise[];
}

export interface Workout extends WorkoutFormValues {
  totalCalories?: number;

  sessionId: string;
}

export interface Exercise extends ExerciseFormValues {
  totalDistance?: number;
  totalTime?: number;
  averageWeigth?: number;
  averageReps?: number;

  sessionId: string;
}
