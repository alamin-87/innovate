import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Home from './Pages/Home'
import Layout from './Layouts/Layout'

function App() {
  const [count, setCount] = useState(0)
  const Myrouter=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/forgetPassword' element={<ForgetPass/>}/> */}
    </Route>
  ))

  return (
    <>
        <RouterProvider router={Myrouter}/>
    </>
  )
}

export default App
