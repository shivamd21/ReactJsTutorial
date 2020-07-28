import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import Navbar from './AllRouterFiles/Navbar';
import Home from './AllRouterFiles/Components/Home';
import About from './AllRouterFiles/Components/About';
import Contact from './AllRouterFiles/Components/Contact';
import Signup from './AllRouterFiles/Components/signup';
import Signin from './AllRouterFiles/Components/signin';


function App() {
  return (
 
    <div className="App">
         <BrowserRouter>
      <div>
        <Navbar/>
      </div>
 
   {/* <Switch> */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin/:username" component={Signin}/>
          <Route path="/contact/:id" component={Contact}/>
            
         
        {/* </Switch> */}
   </BrowserRouter>
    </div>
  );
}

export default App;
