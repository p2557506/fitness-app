import React from 'react'
import "./workoutPlan.scss"
import Navbar from '../../components/Navbar'

const WorkoutPlan = () => {
  return (
    <div className="workoutPlanPage">
      <div className="navbar"><Navbar/></div>
      <div className="header"><h4>Workout Scheduler</h4></div>
      <div className="table">

        <div className="gridColContainer">
          <div className="gridCol">Monday</div>
          <div className="gridCol">Tuesday</div>
          <div className="gridCol">Wednesday</div>
          <div className="gridCol">Thursday</div>
          <div className="gridCol">Friday</div>
          <div className="gridCol">Saturday</div>
          <div className="gridCol">Sunday</div>
        </div>
        <div className="gridExerciseContainer">
          <div className="gridItem">
            <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
          <div className="gridItem">
          <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
          <div className="gridItem">
          <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
          <div className="gridItem">
          <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
          <div className="gridItem">
          <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
          <div className="gridItem">
          <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
          <div className="gridItem">
          <ul>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
              <li className="gridRow">jiji</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutPlan