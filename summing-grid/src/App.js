import React, { useState } from 'react';
import './App.css';
import formatNumber from './formatNumber';

function App(){

  const [fields, setFields] = useState([]);

  const handleFieldChange = (key, event) => {
    let val = event.target.value ? parseFloat(event.target.value) : 0;
    setFields({
      ...fields,
      [key] : val
    });
  }

  const getSumFields = (fields) => {
    let totalSum = 0; 
    for (let fieldKey in fields){
      totalSum += fields[fieldKey];
    }
    return totalSum;
  }

  let sum = getSumFields(fields);

  return (
    <div className="numGrid">
      <input className="numberField" type="number" onChange={handleFieldChange.bind(null, 'a')} />
      <input className="numberField" type="number" onChange={handleFieldChange.bind(null, 'b')} />
      <input className="numberField" type="number" onChange={handleFieldChange.bind(null, 'c')} /> 
      <input className="numberField" value={formatNumber(sum)} readOnly />
    </div>
  )

}

export default App;