import React from 'react'
import PropTypes from 'prop-types'

const Header = ({classname,text}) => {
    return (
        <header className={classname}>
            <div className="title">{text}</div>
        </header>
    )
}

Header.propTypes = {

}

export default Header
