import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Routes,Route,Link, Outlet } from 'react-router-dom'


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Landing/>} />
          <Route path="/neet/class-11th" element={<Class11th/>} />
          <Route path="/neet/class-12th" element={<Class12th/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes> 
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div>
    <Link to="/">main</Link>
    ||
    <Link to="/neet/class-11th">11</Link>
    ||
    <Link to="/neet/class-12th">12</Link>
    <Outlet />
    footer

    
  </div>
  
}

function Landing(){
  return <div>
    welcome here
  </div>
  
}
function Class11th(){
  return <div>
    class 11th
  </div>
  
}

function Class12th(){
  return <div>
    class 12th
  </div>
  
}

function Error(){
  return <div>
    Sorry bro page not found
  </div>
  
}

export default App
