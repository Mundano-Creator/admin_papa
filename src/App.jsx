import './App.css';
import Form from './components/Form';
import AdminHome from './components/UserHome';
import Ganadores from './components/ganadores';
import ChangePassword from './components/cambiarP';
import Crearadmins from './components/crearusers';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (  
    <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route index element={<Form callback={setUser}/>}></Route>
        <Route path='/cambiarP' element={<ChangePassword/>}></Route>
        <Route path='/crearusers' element={<Crearadmins/>}></Route>
        <Route path='/ganadores' element={<Ganadores/>}></Route>
        <Route path='/UserHome' element={<AdminHome/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
