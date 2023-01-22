import Clock from '@assets/svgs/clock.svg';
import Shoes from '@assets/svgs/shoes.svg';
import Weight from '@assets/svgs/weight.svg';
import { exerciseTypes, ValidExerciseType } from '../constants';

import { ExerciseIconMappingType } from '../types/exercises';

export const getExerciseTypeIcon = (type: ValidExerciseType) => {
  const icon = exerciseIconMappings[type];

  if (icon) {
    return icon;
  }
};

export const exerciseIconMappings: ExerciseIconMappingType = {
  [exerciseTypes.WEIGHT]: Weight,
  [exerciseTypes.DISTANCE]: Shoes,
  [exerciseTypes.TIME]: Clock
};
