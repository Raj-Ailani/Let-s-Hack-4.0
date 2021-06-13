import React from 'react'
 import { Switch, Route } from 'react-router-dom';
// import About from './About';
// import Demo from './Demo';
import MainPage from './MainPage'


const Main = () => {
    return (
        <div>
          
        
            <Switch>
            {/* <Route path="/about" component={About}/>     */}
            {/* <Route path="/demo" component={Demo}/>  */}
            <Route path="/" component={MainPage}/> 
            
            </Switch>
           
         
        </div>
    )
}

export default Main