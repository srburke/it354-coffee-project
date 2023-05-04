import NavBar from './components/NavBar';
import Home from './components/Home';
import Single from './components/Single';
import { Routes, Route } from 'react-router-dom';
import { auth, db } from './config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct';
import IndividualProduct from './components/IndividualProduct';
import AllProducts from './components/AllProducts';


function App() {
  /** Retrieves the current user from Firebase authentication and Firestore db. Keeps user logged in upon 
   *  page refresh, getting the current user's information.
  */
  function GetCurrentUser() {
    const [user, setUser] = useState('');

    useEffect(() => {
      auth.onAuthStateChanged(userlogged => { /**  Listens for changes to the auth state. If a user is logged in, getusers function is called  */
        if (userlogged) {
          const getUsers = async () => { // Queries the users collection using query method and where clause to filter by the logged-in user's uid.
            const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
            console.log(q);
            const data = await getDocs(q); // getDocs method is used to retrieve the documents matching the query
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // setUser function is used to update the user state with the retrieved data
          };
          getUsers();
        } else {
          setUser('');
        }
      })
    }, [])
    return user
  }
  const loggeduser = GetCurrentUser();




  return (

  
    <div className='App' style={{background: "hsla(23, 39%, 9%, 1)"}}>
  
      
      <NavBar GetCurrentUser={GetCurrentUser()} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee-type/light' element={<AllProducts type={'Light'} />} />
        <Route path='/coffee-type/medium' element={<AllProducts type={'Medium'} />} />
        <Route path='/coffee-type/dark' element={<AllProducts type={'Dark'} />} />
        <Route path='/single' element={<Single />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/product/:type/:id' element={<IndividualProduct />} />
      </Routes>
      
</div>
   


  );
}



export default App;
