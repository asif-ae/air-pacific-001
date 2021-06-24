import { Fragment } from 'react';
import HomeCards from '../HomeCards/HomeCards';

const Services = () => {
  return (
    <Fragment>
      <div className="container py-5" id="service">
        <div className="text-center">
          <h4 className="p-3">Featured destinations from <b>Dhaka</b></h4>
        </div>
        <div className="service-cards">
          <HomeCards></HomeCards>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;