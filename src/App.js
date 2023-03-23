import NavBar from './components/NavBar';
import Home from './components/Home';
import Coffee from './components/Coffee';
import Single from './components/Single';
import Account from './components/Account';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false);
  const ShowAccount = () => {
    if (show == true) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/single' element={<Single />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <div className="container">
        <Account />
      </div>
    </>
  );
}



export default App;
