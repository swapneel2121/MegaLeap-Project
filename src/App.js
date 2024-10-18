import User from './components/User'
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
      <Route  path="/" element={<User/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;