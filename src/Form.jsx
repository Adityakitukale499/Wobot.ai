import React from 'react'
import './App.css'
const Form = () => {
    return (
        <div className="form">
            <img className='img' src="Screenshot 2023-07-29 164551.png" alt="" />
            <h1 className='text'>It's a deligth to have you onbord</h1>
            <p className='text'>Help us know you better.</p>
            <p className='text'>(This is how we optimize Wobot as per your business needs)</p>
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder='e.g. John Smith' id='name' />
            <label htmlFor="name">Company name</label>
            <input type="text" placeholder='e.g. Alpha Inc.' id='name' />
            <label htmlFor="industry">Industry</label>
            <select id="industry">
                <option value="IT">IT</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
            </select>
            <label htmlFor="">Number of locations</label>
            <div className="location">
                <div>1-20</div>
                <div>21-50</div>
                <div>50-200</div>
                <div>201-500</div>
                <div>500+</div>
            </div>

            <button className='btn'>Get Started</button>
        </div>
    )
}

export default Form