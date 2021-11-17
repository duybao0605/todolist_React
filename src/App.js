import logo from './logo.svg';
import React, {fragment} from 'react'
import Header from "./components/Header"
import Todos from "./components/Todos"

import './App.js';

const App = () => {
    return (
      <fragment>
        
        <Header/>
        <Todos/>
    
      </fragment>
    )
      
      
}

export default App;