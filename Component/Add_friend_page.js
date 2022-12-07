import React from 'react'

function Add_friend_page({cartItems,RemoveFriend}){
 
  return (
 <>
 
 {cartItems.length === 0 && <div><h1>on friend added</h1></div>}

 {cartItems.map((f)=>{
  return(
  <div key={f.id}>
    <h3>{f.first_name}  {f.last_name}</h3>
    <button onClick={()=>{RemoveFriend(f) }}>remove</button>
  </div>)
 })}
 <hr/>
 </>
    
  );
  
}

export default Add_friend_page
