import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useWorkoutRegistryStore, useWorkoutSessionStore } from 'stores';
import DatePicker from '@components/DatePicker';
import { useNavigate } from 'react-router-dom';
import ExerciseDisplay from '@components/ExerciseDisplay';
import { ActionRow, Header, NoExercisesLabel } from './styles';
import { StyledFlatButton, StyledOutlineButton } from 'styles';

const CurrentWorkoutPage = () => {
  const exercises = useWorkoutSessionStore((state) => state.exercises);
  const resetState = useWorkoutSessionStore((state) => state.resetState);
  const date = useWorkoutSessionStore((state) => state.date);
  const setDate = useWorkoutSessionStore((state) => state.setDate);
  const addWorkout = useWorkoutRegistryStore((state) => state.addWorkout);
  const navigate = useNavigate();
  const onDateChange = (e: any) => {
    const { value } = e.target;
    setDate(value);
  };

  // TODOS
  // - RENDER EXERCISES STORED
  // - ADD FUNCTIONALITY TO REMOVE EXERCISES
  // - ADD FUNCTIONALITY (SEPARATE STORE AND FUNCTIONS) TO STORE ENTIRE WORKOUTS

  const submitWorkout = useCallback(() => {
    const workoutData = {
      date,
      exercises,
      sessionId: uuidv4()
    };

    addWorkout(workoutData);
    resetState();
    navigate('/');
  }, [exercises, date]);

  return (
    <div>
      <DatePicker onChange={onDateChange} />
      <Header>Exercises</Header>
      {exercises.length === 0 ? (
        <NoExercisesLabel>No exercises have been added yet</NoExercisesLabel>
      ) : (
        exercises.map((exercise) => {
          return <ExerciseDisplay {...exercise} key={exercise.sessionId} />;
        })
      )}
      <ActionRow>
        <StyledFlatButton onClick={() => navigate('/addExercise')}>
          Add Exercise
        </StyledFlatButton>
        <StyledOutlineButton onClick={() => submitWorkout()}>
          Finalize Workout
        </StyledOutlineButton>
      </ActionRow>
    </div>
  );
};

export default CurrentWorkoutPage;
