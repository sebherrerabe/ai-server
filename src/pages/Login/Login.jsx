import logo from './assets/img/logo-becode.png'
import './Login.css'

import { useContext } from "react";
import { ThemeContext } from "../../Layout/Layout";

const Login = () => {

  const themeColors = useContext(ThemeContext);


  return (
    <>
      <div className="content">
        <div className="inner-content">
          <div className="login-left">
            {/* <img src={logo} alt="logo" className="login-logo" /> */}
          </div>
          <div className="login-middle"></div>
          <div className="login-right">
            <div className="login-right-top">
              <h1 className={"login-heading " + themeColors.textTertiaryColor}> / LOGIN </h1>
            </div>
            <div className="login-right-bottom">
              <form className="login-form"
                action="dashboard">
                <input className={"login-input " + themeColors.colorPrimary} type="text" placeholder="Username" />
                <input className={"login-input " + themeColors.colorPrimary} type="password" placeholder="Password" />
                <br />
                <div className="login-form-bottom">
                  <div className="login-form-bottom-left">
                    <input className={"login-check-box" + themeColors.colorSecondary + " " + themeColors.textSecondaryColor}  type="checkbox" />Remember me
                  </div>
                  <div className="login-form-bottom-right">
                    <button className={"login-btn " + themeColors.colorSecondary + " " + themeColors.textSecondaryColor} type="submit">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Login
