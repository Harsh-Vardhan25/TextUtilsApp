import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';



export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.var1}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>

        </>
    )
}

Navbar.propTypes = {
    var1: PropTypes.string.isRequired,
    var2: PropTypes.string,
    var3: PropTypes.string
};

Navbar.defaultProps = {
    var1: 1,
    var2: 2,
    var3: 3
}; 
