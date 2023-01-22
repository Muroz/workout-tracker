import { ExerciseSet } from '@components/forms/ExerciseForm/types';
import {
  ValidExerciseType,
  exerciseTypes,
  timeUnits,
  distanceUnits
} from '../constants';

export const isValidNumber = (number: number | undefined) => {
  if (!number) return false;
  return !isNaN(number) && number > 0;
};

export const getFormattedSetDescription = (
  exerciseType: ValidExerciseType,
  set: ExerciseSet,
  units: string
) => {
  const { weight, reps, distance, duration } = set;

  if (exerciseType === exerciseTypes.WEIGHT) {
    return `${weight} ${units} x ${reps}`;
  } else if (exerciseType === exerciseTypes.DISTANCE) {
    return `${distance} ${units} ${
      isValidNumber(duration) && `x ${duration} ${timeUnits[0].label}`
    }`;
  } else if (exerciseType === exerciseTypes.TIME) {
    return `${duration} ${units} ${
      isValidNumber(distance) && `x ${distance} ${distanceUnits[0].label}`
    }`;
  }
};

export const getBasicExerciseUnits = (
  exerciseType: ValidExerciseType,
  set: ExerciseSet
) => {
  const { weight, reps, distance, duration } = set;
  if (exerciseType === exerciseTypes.WEIGHT) {
    return {
      weight,
      reps
    };
  } else if (exerciseType === exerciseTypes.DISTANCE) {
    return {
      distance,
      ...(isValidNumber(duration) && { duration })
    };
  } else if (exerciseType === exerciseTypes.TIME) {
    return {
      duration,
      ...(isValidNumber(distance) && { distance })
    };
  }
};
