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

// MVP REQUIREMENTS 
// Plan and implement how you are going to manage your state for your application ✅
//You must use either context or Redux as your state management system ✅
//Once you have planned out your state management system, fetch data from the smurf server and display the data it returns ✅
//Add a form to collect info for a new smurf, and make a POST request to the server to add a new smurf to your village ✅