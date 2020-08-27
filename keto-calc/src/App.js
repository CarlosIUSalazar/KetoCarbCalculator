import React from 'react';
import Header from './Components/Header'
import FoodInput from './Components/FoodInput'
import Results from './Components/Results'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodInput />
      <Results />
    </div>
  );
}

export default App;
