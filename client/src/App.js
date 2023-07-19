import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import routes
import Login from './routes/login/login';

const App = () => {
  return(
    <div className='background-general'> 
      <div className='bg-modal'>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}></Route>
          </Routes>
        </Router>
      </div>  
    </div>
  )
}

export default App;
