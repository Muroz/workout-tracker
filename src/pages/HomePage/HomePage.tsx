import React, { useEffect, useState } from 'react';

import DatePicker from '@components/DatePicker';
import WorkoutSummary from '@components/WorkoutSummary';
import { Workout } from 'types/exercises';
import { useWorkoutRegistryStore } from 'stores';
import { Container } from './styles';
import { StyledFlatButton } from 'styles';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [date, setDate] = useState<string>();
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>();
  const workouts = useWorkoutRegistryStore((state) => state.workouts);
  const navigate = useNavigate();

  const onDateChange = (e: any) => {
    const { value } = e.target;
    setDate(value);
  };

  useEffect(() => {
    const filteredWorkouts = workouts.filter(
      (workout) => workout.date === date
    );
    setFilteredWorkouts(filteredWorkouts);
  }, [date, workouts]);

  return (
    <Container>
      <DatePicker onChange={onDateChange} />
      <StyledFlatButton onClick={() => navigate('addWorkout')}>
        Track Workout
      </StyledFlatButton>
      {filteredWorkouts?.map((workout) => {
        return <WorkoutSummary {...workout} key={workout.sessionId} />;
      })}
    </Container>
  );
};

export default HomePage;
