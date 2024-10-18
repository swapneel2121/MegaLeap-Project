import { useState,useEffect } from "react";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
function User() {
  const [search,setSearch] = useState();

  const [data,setData]=useState([]);
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>response.json())
    .then(value=>{setData(value)
    
    })

  const searchUser = (evt)=>{
    setData();
  }  
  return (
    <>
      <div className="container">
        <div className="searchbox">
        ,<input type="text" placeholder="search name" onChange={e=>setSearch(e.target.value)} onKeyPress={searchUser}/>
        </div>
        show?
        {data.map(user=>
        <div className="card" style={{width:'500px'}}>
          <div classNmae="card-body">
            <ul style={{listStyleType:'none'}}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.company.name}</li>
            </ul>
            </div>
            
        </div>)}
        <button onClick={<Create/>}>form</button>
      </div>
   </>
  );
}

export default User;