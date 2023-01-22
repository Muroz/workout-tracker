import React, { FC } from 'react';

import { getExerciseTypeIcon } from '@utils/iconMappings';
import { isValidNumber } from '@utils/metrics';

import { Exercise } from 'types/exercises';
import { SummaryContainer } from './styles';

const ExerciseSummary: FC<Exercise> = ({ type, name, calories }) => {
  const Icon = getExerciseTypeIcon(type);

  return (
    <SummaryContainer>
      {Icon && <Icon width="3rem" height="3rem" />}
      <div>{name}</div>
      {isValidNumber(calories) && <div>{calories} cals</div>}
      <div>optional values</div>
    </SummaryContainer>
  );
};

export default ExerciseSummary;
