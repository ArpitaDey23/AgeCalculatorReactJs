import React, { useState } from 'react'

const AgeCal = () => {
    const [birthDate , setBirthDate] = useState('');
    const [age, setAge] = useState(0);
    const [months, setMonths] = useState(0);

    const handleClick=()=>{
        const today = new Date();
        const input = new Date(birthDate);

        let age = today.getFullYear()-input.getFullYear();
        let year = today.getMonth()-input.getMonth();
        let month = today.getDate()-input.getDate();
        if(year <0 || (year === 0 && today.getDate()< input.getDate()) && month<0 || (month === 0 && today.getDate()<input.getDate())){
            (age++ && month--)
        }
        setAge(age);
        setMonths(months);
    }
    const handleReset =()=>{
        setBirthDate([]);
        setAge([]);
    }
  return (
    <div className="position-absolute top-50 start-50 translate-middle p-3 mb-2 bg-danger-subtle text-emphasis-danger" >
      <div>
        <h2 className="text-bg-secondary p-3">Age Calculator
            </h2>
        </div>
        <div>
            <h3>Date Of Birth</h3>
            <input type='date' value={birthDate} onChange={e=>setBirthDate(e.target.value)}/>
            <button onClick={handleClick}>Calculate Age</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <div>
        <h2>Your Age is</h2>
            <h2>{age>0 ? `${age}`: ''}</h2>
            <h2>{months>0 ?`${months}` :''}</h2>
        </div>

    </div>
  )
}

export default AgeCal
