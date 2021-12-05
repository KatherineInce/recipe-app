import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import {GeneralContext} from '../context/GeneralContext'
import Card from './Card'
import Lunch from '../images/LUNCH2.jpg'
import Breakfast from '../images/BREAKFAST.jpg'
import Dinner from '../images/DINNER2.jpg'


const ListMealPlan = props => {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Saturday','Sunday']
    const images =[Breakfast,Lunch,Dinner]
    const {mealPlan} = useContext(GeneralContext)
    return (
        <div>
            {days.map(day =>(
                 <div key={day}>
                    <h1>{day}</h1>
                    {mealPlan.week[day.toLowerCase()].meals.map((meal,index) =>(
                         <Card key={meal.id} recipeName={meal.title} minutes={meal.readyInMinutes} servings={meal.servings} url={meal.sourceUrl} image={images[index]}/>
                    ))}
                </div>
            ))}
            
        </div>
    )
}

ListMealPlan.propTypes = {

}

export default ListMealPlan
