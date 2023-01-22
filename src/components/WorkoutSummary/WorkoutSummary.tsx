import React, { FC } from 'react';

import ExerciseSummary from '@components/ExerciseSummary';

import { Workout } from 'types/exercises';
import { Container, ExerciseContainer } from './styles';

const WorkoutSummary: FC<Workout> = ({ exercises }) => {
  return (
    <Container>
      <div>Exercises:</div>
      <ExerciseContainer>
        {exercises.map((exercise) => (
          <ExerciseSummary {...exercise} key={exercise.sessionId} />
        ))}
      </ExerciseContainer>
    </Container>
  );
};

export default WorkoutSummary;
