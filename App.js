import logo from './logo.svg';
import './App.css';
import Content_page from './Component/Content_page';
import Add_fri from './Component/add_frieds';
import Add_friend_page from './Component/Add_friend_page';
import React, { useEffect, useState } from 'react'
import Nvbr from './Component/add_frieds';
import About from './Component/About';
import Login from './Component/Login';
import Friendslist from './Component/Friends-list';
import {Link,Route,Routes} from "react-router-dom";


function App() {
  
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((respo) => respo.json())
      .then((Data) => setUser(Data.data));
  }, []);
  console.log(user);
  const productItem=user;
  console.log("App component:",productItem)
  const[cartItems,setCartItems]=useState([]);
  
  
  function AddFriends(friend){
    const friend_exist=cartItems.find((fr)=>fr.id === friend.id);
    if(friend_exist){
      setCartItems(cartItems.map((fr)=>
      fr.id ===friend.id 
      ?{...friend_exist,quantity:friend_exist.quantity+1}
      :fr
      )
      );
    
  }
    else{
      setCartItems([...cartItems,{...friend,quantity:1}]);
    }
  }
  function RemoveFriend(friend){
   

    const friend_exist=cartItems.find((fr)=>fr.id === friend.id);
    if(friend_exist.quantity===1){
      setCartItems(cartItems.filter((fr)=>fr.id !== friend.id));
    }
    else{
      setCartItems(
        cartItems.map((fr)=>fr.id===friend.id ?{...friend_exist,quantity:friend_exist.quantity-1}:fr)
      )
    }
  

  }
  
  


 return (
    <div className="App">
        <Link to="about">ABOUT</Link>
       <Link to="login">LOGIN</Link>
       <Link to="friends list">FRIENDS LIST </Link>
       
  <Routes>
  <Route path="about" element={<About/>}> </Route>
  <Route path="login" element={<Login/>}></Route>
  <Route path="friends list" element={<Friendslist/>}></Route>
   </Routes>
     
     
     <Add_friend_page   cartItems={cartItems} RemoveFriend={RemoveFriend} />
        
        <Nvbr/>
        <Content_page productItem={productItem} AddFriends={AddFriends} />
      
   
    </div>
  );
}

export default App;
