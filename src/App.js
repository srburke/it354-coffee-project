import NavBar from './components/NavBar';
import Home from './components/Home';
import Coffee from './components/Coffee';
import Single from './components/Single';
import Cart from './components/Cart';
import Account from './components/Account';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
//import AuthDetails from './components/auth/AuthDetails';
import { Routes, Route } from 'react-router-dom';
//import { AuthContextProvider } from './components/auth/AuthDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './components/CartContext';

function App() {
  //const {products} = props

  return (

    <CartProvider>

      <NavBar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/single' element={<Single />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
   
    </CartProvider>

  );
}



export default App;
