import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Form from '../components/Form'

const Recipes = props => {
    return (
        <div>
            <Header classname="recipe" text="Recipes Searcher"/>
            <div className="container mt-5">
                <div className="row">
                    <Form/>
                </div>
            </div>
        </div>
    )
}

Recipes.propTypes = {

}

export default Recipes
