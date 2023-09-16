import React from 'react'
import "./navbar.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="logo">EverythingFitness</div>
        

            <ul className="links"> 
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/workoutPlan">Workout Plan</Link></li>
                <li><Link to = "/dietPlan">Diet Plan</Link></li>
                
            </ul>
        
    </div>
  )
}

export default Navbar