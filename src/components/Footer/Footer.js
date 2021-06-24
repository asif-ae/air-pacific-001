import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <div className="container-fluid">
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between align-items-center">
              <div className="py-3">
                <Link className="navbar-brand text-uppercase" id="air-brand" to="/"><FontAwesomeIcon icon={faLocationArrow} />Air Pacific</Link>
              </div>
              <div className="a">
                <div className="a">&copy; {(new Date()).getFullYear()} AIR PACIFIC | All Rights Reserved</div>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none text-center">
            <div className="py-3">
              <Link className="navbar-brand text-uppercase" id="air-brand" to="/"><FontAwesomeIcon icon={faLocationArrow} />Air Pacific</Link>
              <div className="">&copy; {(new Date()).getFullYear()} AIR PACIFIC | All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;