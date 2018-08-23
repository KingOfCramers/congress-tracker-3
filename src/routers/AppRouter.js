import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from "../components/HomePage";
import Header from "../components/Header.js";
import FourOhFour from "../components/FourOhFour";
import HelpPage from "../components/HelpPage";
import TweetDashboard from "../components/TweetDashboard";
import CaseDashboard from "../components/CaseDashboard";


class AppRouter extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/tweets" component={TweetDashboard} />
            <Route path="/cases" component={CaseDashboard} />
            <Route path="/help" component={HelpPage} />
            <Route component={FourOhFour}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;