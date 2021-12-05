import React,{useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { FaSearch,FaHamburger } from "react-icons/fa";
import {GeneralContext} from '../context/GeneralContext'
import ListRecipes from './ListRecipes'

import {Link} from 'react-router-dom'

const Form = props => {
    const[activeError,setActiveError] = useState(false)
    const[message,setMessage] = useState('')
    const Validate = e =>{
        e.preventDefault();
        
        if(queryRecipe !== '' || typeRecipe.length > 0 || dietRecipe.length > 0 || cuisineRecipe.length > 0 || intoleranceRecipe.length > 0){
            if(isNaN(queryRecipe) || queryRecipe === '')
            {
              getRecipe()
              setActiveError(false)
              setMessage('')
             }
            else{
                setActiveError(true)
                setMessage('Recipes must be write with letters!')  
            }
        }
        else{
          setActiveError(true)
          setMessage('A recipe is required!')
        }
    }
    const[active,setActive] = useState(-1);
    const cuisines = [
        'African','American',
        'British','Cajun',
        'Caribbean','Chinese',
        'Eastern European','European',
        'French','German',
        'Greek','Indian',
        'Irish','Italian',
        'Japanese','Jewish',
        'Korean','Latin American',
        'Mediterranean','Mexican',
        'Middle Eastern','Nordic',
        'Southern','Spanish','Thai',
        'Vietnamese'
    ];
    const diets = [
        'Gluten Free','Ketogenic',
        'Vegetarian','Lacto-Vegetarian',
        'Ovo-Vegetarian','Vegan',
        'Pescetarian','Paleo',
        'Primal','Low FODMAP',
        'Whole30'  
    ];
    const intolerances = ['Dairy','Egg','Gluten','Grain','Peanut','Seafood','Sesame','Shellfish','Soy','Sulfite','Tree Nut','Wheat' ];
    const types = ['main course','side dish','dessert','appetizer','salad','bread','breakfast','soup','beverage','sauce','marinade','fingerfood','snack','drink']
    const {typeRecipe,dietRecipe,cuisineRecipe,intoleranceRecipe,setTypeRecipe,setIntoleranceRecipe,setCuisineRecipe,setDietRecipe,recipes,queryRecipe,setQueryRecipe,getRecipe} = useContext(GeneralContext);
    return (
        <div
            className="col-12"
        >
        {activeError &&
            <div className="alert alert-danger" role="alert">
                <strong>Error:</strong> {message}
            </div>
            }
            <form onSubmit={Validate} className="row jumplines">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input 
                        name="name" 
                        className="form-control" 
                        type="text"
                        value={queryRecipe}
                        placeholder="Search some recipes in here..." 
                        onChange={(e)=>setQueryRecipe(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary"><FaSearch/></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-6">
                    <button className="btn btn-link" onClick={()=>setActive(active*-1)}>Advanced Search</button>
                </div>
                <div className="col-md-2 col-6 text-right">
                    <Link className="btn btn-success" to="/meal-planner"><FaHamburger/>&nbsp;&nbsp;Meal Planner!</Link>
                </div>
            </form>
            {active > 0 &&
                <div className="row">
                    <div className="col-md-3 col-6">
                        <select className="form-control" onChange={e=>setDietRecipe(e.target.value)}>
                            <option value="">Diet Type...</option>
                            {diets.map(diet=>(
                                <option value={diet} key={diet}>{diet}</option>
                            ))}
                            </select>
                    </div>
                    <div className="col-md-3 col-6">
                        <select className="form-control" onChange={e=>setCuisineRecipe(e.target.value)}>
                            <option value="">Cuisine Type...</option>
                            {cuisines.map(cuisine=>(
                            <option value={cuisine} key={cuisine}>{cuisine}</option>
                        ))}
                        </select>
                    </div>
                    <div className="col-md-3 col-6">
                        <select className="form-control" onChange={e=>setIntoleranceRecipe(e.target.value)}>
                            <option value="">Intolerances Type...</option>
                        {intolerances.map(intolerance=>(
                            <option value={intolerance} key={intolerance}>{intolerance}</option>
                        ))}
                        </select>
                    </div>
                    <div className="col-md-3 col-6">
                        <select className="form-control" onChange={e=>setTypeRecipe(e.target.value)}>
                            <option value="">Food Type...</option>
                        {types.map(type=>(
                            <option value={type} key={type}>{type}</option>
                        ))}
                        </select>
                    </div>
                </div>
            }
            {Object.keys(recipes).length > 0 &&
                <ListRecipes></ListRecipes>
            }
        </div>
    )
}

Form.propTypes = {

}

export default Form
