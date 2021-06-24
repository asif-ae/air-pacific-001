import './App.css';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  // https://p-airnz.com/cms/assets/US/3000x1792/PAX-homepage-PE-May18-3000x1792__ScaleHeightWzk2MF0_ScaleWidthWzI4ODBd.webp
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
