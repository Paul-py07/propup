import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="container">

      <div className="row">

        <PersonCard
          firstName = "Jane" 
          lastName = "Doe"
          age = {45}
          hairColor = "Black"
        />
        <PersonCard
          firstName = "John"
          lastName = "Smith"
          age = {88}
          hairColor = "Brown"
        />

        <PersonCard
          firstName = "Millard"
          lastName = "Fillmore"
          age = {50}
          hairColor = "Brown"
        />

        <PersonCard
         firstName = "Maria"
         lastName = "Smith"
         age = {62}
         hairColor = "red"
        />
    </div>
  </div>
  );
}

export default App;
