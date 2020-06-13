import React from "react";
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import House from "./components/House";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import Covid from "./components/Covid";
import './generalStyle.css'

const LinkStyle = styled.li`
color: #625a56;
margin: 1;
font-family: georgia, sans-serif;
text-transform: uppercase;
display: flex;
padding: 0px 20px;
align-items: center;
box-shadow: 5px 5px 5px #e6e6e6;
justify-content: center;
`;

const Centered = styled.ul`
display:flex;
justify-content: center;
`;

export default function App() {
  return (
    <Router>

    <div className='container-fluid' className = 'first'>
    <Centered>
          <ul className="nav">
          <LinkStyle>
            <li className="navItem">
              <Link to="/">Home&nbsp;</Link>
            </li>
            </LinkStyle>
            <LinkStyle>
            <li className="navItem">
              <Link to="/House">Houses For Rent&nbsp;</Link>
            </li>
            </LinkStyle>
            <LinkStyle>
            <li className="navItem">
              <Link to="/Restaurant">Restaurants Open Now</Link>
            </li>
            </LinkStyle>
            <LinkStyle>
            <li className="navItem">
              <Link to="/Covid">Updates on Covid-19</Link>
            </li>
            </LinkStyle>
          </ul>
          </Centered>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/House">
            <House />
          </Route>
          <Route path="/Restaurant">
            <Restaurant />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Covid">
            <Covid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
