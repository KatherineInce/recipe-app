import React,{useState,useContext} from 'react'
import PropTypes from 'prop-types'
import {GeneralContext} from '../context/GeneralContext'
import { FaSearch,FaFileInvoice } from "react-icons/fa";
import {Link} from 'react-router-dom'
import ListMeal from './ListMealPlan'

const Form = props => {
  const[active,setActive] = useState(false)
  const[message,setMessage] = useState('')
  const {mealPlan,getMealPlan,setCalories,calories} = useContext(GeneralContext);
  const Validate = e =>{
      e.preventDefault();      
      if(calories !== ''){
          if(isNaN(calories))
          {
            setActive(true)
            setMessage('Calories must be a numeric value!')
          }
          else{
            getMealPlan()
            setActive(false)
            setMessage('')
          }
        
      }
      else{
        setActive(true)
        setMessage('Calories are required!')
      }
  }
  return (
        <div
            className="col-12"
        >
            {active &&
            <div className="alert alert-danger" role="alert">
                <strong>Error:</strong> {message}
            </div>
            }
            <form className="row" onSubmit={Validate}>
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input 
                        name="name" 
                        className="form-control" 
                        type="text"
                        value={calories}
                        onChange={(e)=>setCalories(e.target.value)}
                        placeholder="Your Desired Calories..." />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary"><FaSearch/></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <Link className="btn btn-danger" to="/"><FaFileInvoice/>&nbsp;&nbsp;Get Recipes!</Link>
                </div>
            </form>
            {Object.keys(mealPlan).length > 0 &&
                <div className="row">
                    <ListMeal/>
                </div>
            }
        </div>
    )
}

Form.propTypes = {

}

export default Form
