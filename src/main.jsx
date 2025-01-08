import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
//import Profile from './components/Profile.jsx'

// import {Practices} from  "./Practices.jsx";
   import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <App/> 
      {/* <Profile /> */}

     {/* <Practices/> */}
  </StrictMode>,
)
