import React, { useState } from 'react';
import Header from './Components/Header'
import FoodInput from './Components/FoodInput'
import DropdownMenu from './Components/DropdownMenu'
import Results from './Components/Results'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'

export const grandCarbsTotal = React.createContext()

function App() {

  const [grandTotal, setGrandTotal] = useState(0)

  function updateGrandTotal(num){
    setGrandTotal(parseInt(grandTotal) + parseInt(num))
  }

  return (
    <center>
    <div className="App">
      <Header />
      <DropdownMenu updateGrandTotal={updateGrandTotal} grandTotal={grandTotal}/>
      <Results grandTotal={grandTotal}/>
    </div>
    </center>
  );
}

export default App;
