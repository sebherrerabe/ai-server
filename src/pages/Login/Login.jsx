
import logo from './assets/img/logo-becode.png'
import './Login.css'

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Layout/Layout";
import { LogInContext } from "../../AppRoutes";

import arrow1 from './assets/img/arrow1.svg'
import arrow2 from './assets/img/arrow2.svg'

const Login = () => {

  const themeColors = useContext(ThemeContext);
  const forContext = useContext(LogInContext);

  const [inputValues, setInputValues] = useState({ userName: "", password: "" });

  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://api.ai-server.becode.org/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        username: inputValues.userName,
        password: inputValues.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.details) {
          console.log(data.details) // this is the error message
          //We should probably display it somewhere
        } else {
          if (isChecked) {
            localStorage.setItem("token", JSON.stringify({ jwt: data.jwt, userName: inputValues.userName })); // we store the token in local storage
          }
          forContext.setUserSession({ isLoggedIn: true, userName: inputValues.userName, jwt: data.jwt }); // we set the user session
        }
      })
      .catch((err) => {
        console.log(err)
      });
  }


  return (
    <>
      <div className="content">
        <div className="inner-content">
          <div className="login-left">
            <div className="magic-div ">
              <img src={logo} alt="logo" className="login-logo" />
            </div>
          </div>
          <div className="login-middle">
            <div className="arrow1">
              <img src={arrow1} alt="arrow" className={"login-arrow " + themeColors.textTertiaryColor} />
            </div>
          </div>
          <div className="login-right">
            <div className="login-right-top">
              <h1 className={"login-heading " + themeColors.textTertiaryColor}> / LOGIN </h1>
            </div>
            <div className="login-right-middle">
              <form className="login-form"
                action="dashboard" onSubmit={(e) => { handleLogin(e) }}>
                <input className={"login-input user " + themeColors.colorPrimary + " " + themeColors.textPrimaryColor} type="text" placeholder="Username" onChange={(e) => { setInputValues({ ...inputValues, userName: e.target.value }) }} />
                <input className={"login-input " + themeColors.colorPrimary + " " + themeColors.textPrimaryColor} type="password" placeholder="Password" onChange={(e) => { setInputValues({ ...inputValues, password: e.target.value }) }} />
                <div className="login-form-middle">
                  <img src={arrow2} alt="arrow" className="login-arrow" />
                </div>
                <div className="login-form-bottom">
                  <div className="login-form-bottom-left">
                    {/* Remember me functionality */}
                    <input className={"login-check-box" + themeColors.colorSecondary + " " + themeColors.textSecondaryColor} type="checkbox" onChange={() => setIsChecked(!isChecked)} />Remember me
                  </div>
                  <div className="login-form-bottom-right">

                    <button className={"login-btn "  + themeColors.colorSecondary + " " + themeColors.textSecondaryColor}> <span> Sign In </span></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="login-right-bottom">
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default Login
