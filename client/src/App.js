
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import WorkoutPlan from "./pages/workoutPlan/WorkoutPlan";
import DietPlan from "./pages/dietPlan/DietPlan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/workoutPlan" element={<WorkoutPlan/>}/>
          <Route path ="/dietPlan" element={<DietPlan/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
