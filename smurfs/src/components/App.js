import React from 'react';
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurf from './SmurfForm';

const App =() => {
  
    return (
      <div className="App">
      <SmurfList />
      <AddSmurf />
      </div>
    );
  
}

export default App;
