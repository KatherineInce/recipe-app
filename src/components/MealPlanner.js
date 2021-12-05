import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import FormPlanner from './FormPlanner'

const MealPlanner = props => {
    return (
        <div>
            <Header classname="planner" text="Meal Planner"/>
            <div className="container mt-5">
                <div className="row">
                    <FormPlanner/>
                </div>
            </div>
        </div>
    )
}

MealPlanner.propTypes = {

}

export default MealPlanner
