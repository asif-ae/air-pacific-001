import { Fragment } from 'react';
import NavBar from '../NavBar/NavBar';
import SingleCityCover from '../SingleCityCover/SingleCityCover';

const SingleCity = ({cityData, setCityData}) => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <SingleCityCover cityData={cityData} setCityData={setCityData}></SingleCityCover>
    </Fragment>
  );
};

export default SingleCity;