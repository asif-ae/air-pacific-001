import { Fragment } from 'react';
import Cover from '../Cover/Cover';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Cover></Cover>
    </Fragment>
  );
};

export default Home;