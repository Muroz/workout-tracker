import React from 'react';
import { useWorkoutSessionStore } from 'stores';
import ExerciseForm from '@components/forms/ExerciseForm';
import { useNavigate } from 'react-router-dom';
import { Exercise } from 'types/exercises';

const CurrentExercisePage = () => {
  const navigate = useNavigate();
  const addExercise = useWorkoutSessionStore((state) => state.addExercise);

  const onFormSubmit = (formData: Exercise) => {
    addExercise(formData);
    navigate('/addWorkout');
  };

  return (
    <div>
      <ExerciseForm onSubmit={onFormSubmit} />
    </div>
  );
};

export default CurrentExercisePage;
