import React from 'react';
import './App.css';
import AppRouter from './config/router';
import { AppStyles } from './styles/commomStyles';

function App() {
  return (
    <AppStyles>
      <AppRouter/>
    </AppStyles>
  );
}

export default App;
