import NavBar from './components/NavBar';
import Home from './components/Home';
import Coffee from './components/Coffee';
import Single from './components/Single';
import Cart from './components/Cart';
import Account from './components/Account';
import { Routes, Route } from 'react-router-dom';

function App() {
  //const {products} = props

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/single' element={<Single />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
      </Routes>




    </>

  );
}



export default App;
