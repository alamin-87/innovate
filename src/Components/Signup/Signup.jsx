import React, { useState } from 'react'
import './Signup.css'
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router';

const Signup = () => {
    // =================== variable 
    const navigate = useNavigate()
    const [show , setshow]  = useState(false)
    const [name , setname] =useState('')
    const [email , setemail] = useState('') 
    const [password , setpassword] = useState('')
    const [nameError , setnameError] = useState('')
    const [emailError , setemailError] = useState('')
    const[passwordError , setpasswordError] =useState('')
    // ====================== function part
    const handelsubmit=(e)=>{
        e.preventDefault()
        if(!name){
          setnameError('Enter your name')
        }
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
    <div className="signin-page">
      <div className="signin-container">
        <div className="sign_left-section">
          <h1>Welcome To Our System</h1>
          <p>Start your journey now with us</p>
        </div>
        <div className="sign_right-section">
          <div className="sign_form-container">
            <form className="sign_form create-account-form">
              <h2>Create an account</h2>
              <input
                onChange={(e)=>{setname(e.target.value) , setnameError('')}}
                type="text"
                placeholder="Enter Your Name"
              />
              <p className=' text-lg text-red-700 font-sans font[300]'>{nameError}</p>
              <input
                onChange={(e)=>{setemail(e.target.value) , setemailError('')}}
                type="email"
                placeholder="Enter your email"
              />
              <p className=' text-lg text-red-700 font-sans font[300]'>{emailError}</p>
              <input
                onChange={(e)=>{setpassword(e.target.value) , setpasswordError('')}}
                placeholder="Enter your password"
                type={show?'text':'password'}
              />
              {
              show?
              <LuEye onClick={handelshow} className='eye' />
              :
              <LuEyeOff onClick={handelshow}  className='eye'/>
             }
              <p className=' text-lg text-red-700 font-sans font[300]'>{passwordError}</p>
              <button className='text-lg' onClick={handelsubmit} type="submit">Create account</button>
            </form>
            <div className=' flex justify-between mb-5'>
              <button type='submit' className="google-btn">Continue with Google</button>
              <button className="google-btn">Continue with Facebook</button>
            </div>
              <p>
                Already have an account?  <span onClick={()=>navigate('/login')}>Log in</span>
              </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup