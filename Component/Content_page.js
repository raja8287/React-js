import React, { useEffect, useState } from "react";

function Content_page({ productItem,AddFriends  }) {
  /*   const [user, setUser] = useState([]);
    useEffect(() => {
      fetch("https://reqres.in/api/users?page=2")
        .then((respo) => respo.json())
        .then((Data) => setUser(Data.data));
    }, []);
//    console.log(user);
*/
console.log("content_page",{productItem})

  return (
    <>
    
      <div className="Cards">
        {productItem.map((i) => {
          return (
            <div className="card" key={i.id}>
              <div className="img_card">
                <img src={i.avatar} alt="img" />
              </div>
              <div className="detail">
                <h2>
                  {i.first_name} {i.last_name}
                </h2>
                <p>{i.email}</p>
                <button onClick={()=>AddFriends(i)}>Add to friends list</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content_page;
