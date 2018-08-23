import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Congressio</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink to="/tweets" activeClassName="is-active">Tweets</NavLink>
    <NavLink to="/cases" activeClassName="is-active">Cases</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;