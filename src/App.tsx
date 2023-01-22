import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import CurrentWorkoutPage from 'pages/CurrentWorkoutPage';
import CurrentExercisePage from 'pages/CurrentExercisePage';
import { AppContainer } from 'styles';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addWorkout" element={<CurrentWorkoutPage />} />
        <Route path="/addExercise" element={<CurrentExercisePage />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
