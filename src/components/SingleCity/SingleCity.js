import { Fragment } from 'react';
import Checkout from '../Checkout/Checkout';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SingleCityCover from '../SingleCityCover/SingleCityCover';

const SingleCity = ({cityData, setCityData}) => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <SingleCityCover cityData={cityData} setCityData={setCityData}></SingleCityCover>
      <Checkout cityData={cityData} setCityData={setCityData}></Checkout>
      <Footer></Footer>
    </Fragment>
  );
};

export default SingleCity;