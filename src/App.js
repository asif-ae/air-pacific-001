import './App.css';
import { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home/Home';
import SingleCity from './components/SingleCity/SingleCity';

function App() {
  const [cityData, setCityData] = useState();
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home cityData={cityData} setCityData={setCityData}></Home>
          </Route>
          {
            !cityData ? (
              <Redirect to="/"></Redirect>
            ) : (
              <Route exact path="/city/:cityName">
                <SingleCity cityData={cityData} setCityData={setCityData}></SingleCity>
              </Route>
            )
          }
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
