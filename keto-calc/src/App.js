import React, { useState } from 'react';
import Header from './Components/Header'
import FoodInput from './Components/FoodInput'
import DropdownMenu from './Components/DropdownMenu'
import Results from './Components/Results'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import Table from './Components/Table'

export const grandCarbsTotal = React.createContext()

function App() {

  const [grandTotal, setGrandTotal] = useState(0)

  function updateGrandTotal(num){
    setGrandTotal(parseInt(grandTotal) + parseInt(num))
  }

  const tableOfFoods = [
    {
      food: "food🍎",
      grams: 50,
      carbs: 3.3
    },
    {
      food: "Food2🍌",
      grams: 150,
      carbs: 1.6
    }
  ]

  return (
    <center>
    <div className="App">
      <Header />
      <DropdownMenu updateGrandTotal={updateGrandTotal} grandTotal={grandTotal}/>
      <Results grandTotal={grandTotal}/>
      <Table tableOfFoods={tableOfFoods}/>
    </div>
    </center>
  );
}

export default App;
