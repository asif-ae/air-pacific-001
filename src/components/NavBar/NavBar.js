import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg position-sticky align-items-center">
        <div className="container-fluid">
          <Link className="navbar-brand text-uppercase" id="air-brand" to="/">Air Pacific</Link>
          <button className="navbar-toggler navbar-menu-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="d-flex align-items-end justify-content-end w-100">
              <div className="navbar-nav text-end">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">Features</Link>
                <Link className="nav-link" to="/">Pricing</Link>
                <Link className="nav-link" to="/">Disabled</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;