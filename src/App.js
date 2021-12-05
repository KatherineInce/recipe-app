import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import GeneralProvider from './context/GeneralContext'
import Recipes from './components/Recipes'
import MealPlanner from './components/MealPlanner'

function App() {
  return (
    <GeneralProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Recipes/>}/>
            <Route exact path="/meal-planner" element={<MealPlanner/>}/>
          </Routes>
        </Router>
    </GeneralProvider>
  );
}

export default App;
