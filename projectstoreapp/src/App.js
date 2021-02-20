import React from 'react'
// import HomeView from './views/HomeView'
// import DetalleView from './views/DetalleView'
import Narbar from './components/Navbar';
import Formulario from './components/Formulario';

import {Switch, BrowserRouter as Router} from "react-router-dom"
import Routes from "./routes";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <Router>
     
      <div className="container">
        <Navbar/>
        
        {/* <h1>Navbar</h1> */}
        <Switch>
          <Routes path="/" exact/>
            
          <Routes path ="/Formulario">
            <Formulario/>
          </Routes>
        </Switch>
      </div>
    </Router>
  )
}
