import React, { useContext,useEffect } from 'react'
import PropTypes from 'prop-types'

const Card = ({recipeName,minutes,servings,url,image}) => {
  
    return (
        <div className="card cards">
            <img className="card-img-top imageSize" src={image}  alt="Card image recipe"/>
            <div className="card-body">
                <div className="standardSize">
                    <h5 className="card-title">{recipeName}</h5>
                </div>
                <p className="card-text">This recipe take {minutes} minutes and is enough for {servings} servings</p>
                <a href={url} target='_blank' className="btn btn-primary">View Full Recipe</a>
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card
