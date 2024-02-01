import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import Header from './Component/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Cart from './Component/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Header/>

    <Routes>
    <Route path='/' exact element={<Home/>}/>

    <Route path='/cart' exact element={<Cart/>}/>
    
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
