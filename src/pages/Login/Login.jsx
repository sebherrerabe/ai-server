import logo from './assets/img/logo-becode.png'
import './Login.css'

import { useContext } from "react";
import { ThemeContext } from "../../Layout/Layout";

const Login = () => {

  const themeColors = useContext(ThemeContext);

  return (
    <>
      <div className="content">
        <h1 className="login-heading"> / LOGIN </h1>
        <div className="login-container">

          <img src={logo} alt="logo" className="login-logo" />
          <form className="login-form"
            action="dashboard">
            <input className="login-input" type="text" placeholder="Username" />
            <input className="login-input" type="password" placeholder="Password" />
            <br />
            <input className="login-check-box" type="checkbox" /> Remember me
            <button className={"login-btn " + themeColors.colorSecondary + " " + themeColors.textSecondaryColor} type="submit">Sign in</button>

          </form>
        </div>
      </div>
    </>
  )
}


export default Login
