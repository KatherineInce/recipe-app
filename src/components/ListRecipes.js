import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

import {GeneralContext} from '../context/GeneralContext'

const ListRecipes = props => {
    const {recipes} = useContext(GeneralContext)

    return (
        <div>
            {recipes.map(recipe=>(
                <Card key={recipe.id} recipeName={recipe.title} minutes={recipe.readyInMinutes} servings={recipe.servings} url={recipe.sourceUrl} image={recipe.image}></Card>
            ))}
        </div>
    )
}

ListRecipes.propTypes = {

}

export default ListRecipes
