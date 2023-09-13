import React from 'react'
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="logo">EverythingFitness</div>
        

            <ul className="links"> 
                <li>Home</li>
                <li>Workout Plan</li>
                
            </ul>
        
    </div>
  )
}

export default Navbar