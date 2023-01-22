import React, { FC } from 'react';

import { SetNumberLabel } from '@components/forms/SetInputRow/styles';
import { getExerciseTypeIcon } from '@utils/iconMappings';
import { getFormattedSetDescription, isValidNumber } from '@utils/metrics';

import { Exercise } from 'types/exercises';
import { Container, DataRow, SetContainer, SetRow } from './styles';

const ExerciseDisplay: FC<Exercise> = ({
  type,
  name,
  sets,
  calories,
  sessionId,
  units
}) => {
  const Icon = getExerciseTypeIcon(type);
  return (
    <Container>
      <DataRow>
        {Icon && <Icon width="3rem" height="3rem" />}
        <div>{name}</div>
      </DataRow>
      {isValidNumber(calories) && <DataRow>Calories: {calories} cal</DataRow>}
      <DataRow>Total/avgs</DataRow>
      <div>
        <DataRow>Sets:</DataRow>
        <SetContainer>
          {sets.map((set, index) => {
            const description = getFormattedSetDescription(type, set, units);
            return (
              <SetRow key={`${sessionId}${index}`}>
                <SetNumberLabel>{index + 1}</SetNumberLabel>
                <span>{description}</span>
              </SetRow>
            );
          })}
        </SetContainer>
      </div>
    </Container>
  );
};

export default ExerciseDisplay;
