import React from 'react'
import logo from '../assets/img/logo-becode.png'

const Login = () => {
  return (
    <>
        <h1 className="login-heading"> / LOGIN </h1>
        <div className="login-container">

        <img src={logo} alt="logo" className="login-logo"/>
        <form className="login-form" 
        action="dashboard">
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <br />
            <input   className="login-check-box" type="checkbox" /> Remember me
            <button className="login-btn" type="submit">Sign in</button>
            
        </form>
        </div>
    </>
  )
}


export default Login
