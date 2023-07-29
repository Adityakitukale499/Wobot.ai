import React from 'react'
import Form from './Form'
import './App.css'
const App = () => {
  return (
    <div className="form_container">
      <div className="ImgContainer">
        <img src="https://app.wobot.ai/assets/images/wobot-logo.png" alt="" />
      </div>
      <Form />
      <p className='foot'>Term of use | Privacy policy</p>
    </div>
  )
}

export default App