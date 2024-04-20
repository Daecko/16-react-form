import { useState } from 'react'
//images
import logo from './assets/logo.svg'
import womanImageDesk from './assets/hero-desktop.jpg'
import womanImageMobile from './assets/hero-mobile.jpg'
import patternTop from './assets/bg-pattern-desktop.svg'
import buttonImg from './assets/icon-arrow.svg'
import errorIcon from './assets/icon-error.svg'
//styles
import './App.css'

function App() {
  /* const [womanImage,setWomanImg] = useState('./assets/hero-desktop.jpg')
  window.onresize(()=>{
    if (window.innerWidth<1024) {
      setWomanImg('./assets/hero-mobile.jpg')
    }else{
      setWomanImg('./assets/hero-desktop.jpg')
    }
  }) */
  return (
    <>
      <div className='mainCont'>
        <div className='infoCont'>
          <img src={logo} id='logo' width={158} height={33} />
          <img src={patternTop} id='pattern'  />
          <div className='textCont'>
            <p id='title'>
              <span id='titleHighlight'>We're</span> coming soon
            </p>
            <p id='subtitle'>
              Hello fellow shoppers! We're currently building our new fashion store.
              Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <div className='emailInput' id='emailIn'>
              <input placeholder='Email Address' type='email' id='email'/>
              <img src={errorIcon} id='errorIcon' />
              <img src={buttonImg} id='submitEmail' onClick={()=>{
                var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                var input = document.getElementById('email').value
                if(input.match(validEmail)){
                  document.getElementById('errorMsg').style.display = 'none'
                  document.getElementById('errorIcon').style.display = 'none'
                  document.getElementById('emailIn').style.borderColor = '1px solid #CE9898'
                  alert('Email Validated')
                  console.log('valid')
                } else {
                  document.getElementById('errorIcon').style.display = 'block'
                  document.getElementById('errorMsg').style.display = 'block'
                  document.getElementById('emailIn').style.border = '2px solid #F96464'
                }
                
              }} />
            </div>
            <p id='errorMsg'>Please provide a valid email</p>
          </div>
        </div>
        <div className='imgCont'>
          <img src={logo} id='logoMobile' width={158} height={33} />
          <img src={window.innerWidth>1024 ? womanImageDesk : womanImageMobile} id='womanImg' />
        </div>
      </div>
    </>
  )
}

export default App
