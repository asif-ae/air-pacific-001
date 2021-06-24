import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { coverImage, backOpacity, heightFull } from "./Cover.module.css";

const Cover = () => {
  return (
    <Fragment>
      <div className="container-fluid m-0 p-0">
        <div className={coverImage}>
          <div className={`d-flex align-items-center w-100 ${heightFull}`}>
            <div className={`w-100 ${backOpacity}`}>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className=""></div>
                  <div className="text-end p-3">
                    <img src="https://c.ekstatic.net/ecl/logos/emirates/emirates-fly-better-white.svg?h=ASXr1bEvRLq6igZoljExYw" class="w-50" alt="Fly better" />
                  </div>
                </div>
                <div className="text-center text-white">
                  <h2 className="pt-2 pb-5">
                    <i className="p-3"><u>Experience Premium Economy</u></i>
                  </h2>
                </div>
                <div className="d-flex justify-content-center pb-3">
                  <Link to="#service">
                    <div className="d-flex align-items-center text-white py-2 px-3 border-3 rounded-circle border">
                      <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '24px'}} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cover;