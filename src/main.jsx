import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Contactus from './components/Contactus/Contactus'
import About from './components/About/About'
import Github from './components/Github/Github'
import Users from './components/Users/Users'
import Layout from './Layout'
import { createRoutesFromElements,createBrowserRouter, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element = {<Layout/>}>
    <Route path = "" element = {<Home/>}/>
    <Route path = "Contactus" element = {<Contactus/>}/>
    <Route path = "About" element = {<About/>}/>
    <Route path = "users/:userid" element ={<Users/>}/>
    <Route
     path = "Github" 
     element = {<Github/>}
    //  loader ={Gitinfoprovider}
     />
  </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={router}/>
  </StrictMode>,
)
