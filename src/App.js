import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path='/' element={ <Greeting /> } />
    </Routes>
  );
}


export default App;
