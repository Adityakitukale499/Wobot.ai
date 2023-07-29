import React, { useEffect, useState } from 'react'
import './App.css'
const Form = () => {
    const [location, setLocation] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [industry, setIndustry] = useState('')
    const [Error, setError] = useState('')
    const handleSubmit = () =>{
        if(name && company && location && industry){
            alert('Submit Successful')
        }else{
            setError('All fields are required! Please full fill the form.')
        }
    }
    useEffect(()=>{
        setError('')
    },[name, company, industry, location])
    return (
        <div className="form">
            <img className='img' src="Screenshot 2023-07-29 164551.png" alt="" />
            <h1 className='text'>It's a deligth to have you onbord</h1>
            <p className='text'>Help us know you better.</p>
            <p className='text'>(This is how we optimize Wobot as per your business needs)</p>
            <p className="error">{Error}</p>
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder='e.g. John Smith' id='name'  onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="name">Company name</label>
            <input type="text" placeholder='e.g. Alpha Inc.' id='name'  onChange={(e)=>setCompany(e.target.value)}/>
            <label htmlFor="industry">Industry</label>
            <select id="industry" onChange={(e)=>setIndustry(e.target.value)}>
                <option >Select</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
            </select>
            <label htmlFor="">Number of locations</label>
            <div className="location">
                <div onClick={()=> setLocation('1-20')}>1-20</div>
                <div onClick={()=> setLocation('21-50')}>21-50</div>
                <div onClick={()=> setLocation('51-200')}>50-200</div>
                <div onClick={()=> setLocation('201-500')}>201-500</div>
                <div onClick={()=> setLocation('500+')}>500+</div>
            </div>

            <button className='btn' onClick={handleSubmit}>Get Started</button>
        </div>
    )
}

export default Form