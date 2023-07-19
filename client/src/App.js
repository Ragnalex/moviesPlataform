import "./App.css";
import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import routes
import Login from "./routes/login/login";
import Home from "./routes/home/home";

const App = () => {
  return(
    <div className='background-general'> 
      <div className='bg-modal'>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}>
            </Route>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </Router>
      </div>  
    </div>
  )
}

export default App;
