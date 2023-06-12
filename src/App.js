import React, { useState } from 'react';
import './index.css';
import Home from './Pages/Home';
import Employe from './Pages/Employe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';
import { UserProvider } from './Components/userContext';



function App() {
    const [contextValue, setContextValue]= useState('test')
    return (
      <>
       <BrowserRouter>
        <UserProvider value={{contextValue,setContextValue}}>
            <Routes>
        
                <Route path={'/'} element={<Home/>} />
                <Route path={'/employe'} element={<Employe />}/> 
                <Route path={'*'} element={<Error/>}/>   
           
            </Routes>
        </UserProvider> 
        </BrowserRouter>
      </>
    );
  }
  
  export default App;