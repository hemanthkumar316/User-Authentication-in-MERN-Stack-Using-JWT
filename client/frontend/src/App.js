import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import MyProfile from './MyProfile';

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/myprofile' element={<MyProfile/>} />
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App