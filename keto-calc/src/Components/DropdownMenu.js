import React, { useState, useRef, useEffect } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Select from 'react-select';  //https://www.youtube.com/watch?v=mhLVjY09FOc

import data from '../data'

function DropdownMenu(){

    const foodGrams = useRef(0);
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [selectedValue, setSelectedValue] = useState("Select a Food")

    const handleChange = obj => {
        setSelectedValue(obj)
    }

    let result = 0;
    function calculateCarbs(foodInGrams){
        console.log("foodInGrams",foodInGrams)
        console.log("selectedValue.netCarbs", selectedValue.netCarbs)
        result = selectedValue.netCarbs * (foodInGrams/100)
        console.log("Result",result)
        updateTotalCarbs(result);
    }

    function updateTotalCarbs(amount){
        setTotalCarbs(amount)
    }

    return (
        <>
            <Select
                value = {selectedValue} 
                options={data}
                onChange={handleChange}
                isOptionDisabled={option => option.isDisabled}
                getOptionLabel={option => option.name}  //Esta linea sirve para cambiar el valor de "label" (default) a 'name' en el objeto en este caso. 
                
            />
            <span><input ref={foodGrams} type="text" defaultValue={result}></input>grams</span>

        <br/>
            <b>Net Grams of This Food:</b>
            <pre>{JSON.stringify(selectedValue.netCarbs,null)}</pre>

            <button onClick={() => calculateCarbs(foodGrams.current.value)}>+</button>
        
            <h5>Total Net Carbs is:</h5>
            <span><p className="netResult">{ totalCarbs } grams</p></span>

        </>
    )
}

export default DropdownMenu;




{/* <DropdownButton id="dropdown-basic-button" title="Select your Food">
<Dropdown.Item href="#/action-1">Avocado 🥑</Dropdown.Item>
<Dropdown.Item href="#/action-2">Tomato 🍅</Dropdown.Item>
<Dropdown.Item href="#/action-3">Broccoli 🥦</Dropdown.Item>
</DropdownButton> */}