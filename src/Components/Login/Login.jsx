import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router'
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

const Login = () => {
    // ====================== variable 
    const navigate = useNavigate()
    const [email , setemail] = useState('') 
    const [password , setpassword] = useState('')
    const [emailError , setemailError] = useState('')
    const[passwordError , setpasswordError] =useState('')
      const [show , setshow]  = useState(false)
    // ==================== function part
    const handelsubmit=(e)=>{
        e.preventDefault()
        if(!email){
          setemailError('Enter your email')
        }
        if(!password){
          setpasswordError('Enter your password')
        }
    }
    const handelshow=()=>{
        setshow(!show)
    }
  return (
    <>
    
    <div className="login-page">
      <div className="login-container">
        <div className="login_left-section">
          <h1>Welcome To Our System</h1>
          <p>Start your journey now with us</p>
        </div>
        <div className="login_right-section">
          <div className="login_form-container">
            <form className="login_form login-form">
              <h2>Login to your account</h2>
              <input
               onChange={(e)=>{setemail(e.target.value) , setemailError('')}}
                type="email"
                placeholder="Enter your email"
              />
              <p className=' text-lg text-red-700 font-sans font[300]'>{emailError}</p>
              <input
              onChange={(e)=>{setpassword(e.target.value) , setpasswordError('')}}
                type="password"
                placeholder="Enter your password"
              />
               {
                 show?
                    <LuEye onClick={handelshow} className='eye1' />
                            :
                    <LuEyeOff onClick={handelshow}  className='eye1'/>
                }
              <p className=' text-lg text-red-700 font-sans font[300]'>{passwordError}</p>
              <p className="forgot_password">
                <Link to="/">Forgot?</Link>
              </p>
              <button onClick={handelsubmit} type="submit">Login now</button>
            </form>
              <div className=' flex justify-between mb-5'>
              <button className="login_google-btn">Continue with Google</button>
              <button className="login_google-btn">Continue with Facebook</button>
              </div>
              <p>
                Don't have an account?  <span onClick={()=>navigate('/signup')}> Sign up</span>
              </p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login