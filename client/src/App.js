
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import WorkoutPlan from "./pages/workoutPlan/WorkoutPlan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/workoutPlan" element={<WorkoutPlan/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
