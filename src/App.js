import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes ,Navigate  } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useSelector } from 'react-redux'

function App() {
  const { authStore } = useSelector((state) => ({ ...state }))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={authStore.isLogin ? <Navigate to="/Home"/>:<Navigate to="/Login"/>} />
        <Route path='/Login' element={authStore.isLogin ? <Navigate to="/Home"/>:<Login/>} />
        <Route path='/Home' element={authStore.isLogin ? <Home/>:<Navigate to="/Login"/>}/>
        <Route path='/Detail/:productid' element={<Detail/>} />
        <Route path='/*' element={<Navigate to="/Home"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
