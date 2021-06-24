import { Fragment } from 'react';
import Cover from '../Cover/Cover';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';

const Home = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Cover></Cover>
      <Services></Services>
    </Fragment>
  );
};

export default Home;