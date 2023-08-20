import React from 'react'
import {Link, Outlet} from "react-router-dom"
function Navbar() {
    return (
        <div className="App">
      
          <div className="menu">
              <ul style={{display:"flex", flexDirection:"row", padding:"2px"}}>
                <li style={{margin:"1px"}}> <Link to="/">Home</Link> </li>
                <li> <Link to="/">All Users</Link> </li>
                <li> <Link to="/new">New</Link> </li>
              </ul>
              <Outlet/>
          </div>
        </div>
      );
}

export default Navbar