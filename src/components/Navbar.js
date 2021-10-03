import React from 'react'
import PropTypes from 'prop-types'

// React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object Passing and Accessing props. We can pass props to any component as we declare attributes for any HTML tag.

//This is a react function based component/ ----------------//
export default function Navbar(props) {
return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    );
}


// Below is used to set type of the prop. whether it is a (number, string, bool, array, object or etc)

Navbar.propTypes = {
    // title: PropTypes.string,
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

//Used to set the default value in case no value is passed to the props.
Navbar.defaultProps = {
    title: "set title here",
    aboutText: "About"
};