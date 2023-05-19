import React from "react";
import {Link,NavLink,Outlet} from "react-router-dom";
export default function HostLayout(){
    const active = {
        backgroundColor: "#FF8C38",
           color: "white",
          borderRadius: "50px",
           fontWeight: "700",
    }
    
    return(
        <>  <nav className="host-nav">
            <NavLink 
            to="."
            end
            style={({isActive})=> isActive ? active : null }
            >Dashboard</NavLink>
            <NavLink to="income"
             style={({isActive})=> isActive ? active : null }>Income</NavLink>
               <NavLink to="vans"
             style={({isActive})=> isActive ? active : null }>Vans</NavLink>
            <NavLink to="reviews"
             style={({isActive})=> isActive ? active : null }>Reviews</NavLink>
           
        </nav>
        <Outlet/>
        
        </>
      
        
    )
}