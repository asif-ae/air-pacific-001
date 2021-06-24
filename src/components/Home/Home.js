import { Fragment } from 'react';
import Cover from '../Cover/Cover';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';

const Home = () => {
  return (
    <Fragment>
      <NavBar></NavBar>
      <Cover></Cover>
      <Services></Services>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;