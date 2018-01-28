import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Schedule from './Schedule';
import Projects from './projectComponent/Projects';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/schedule' component={Schedule} />
      <Route exact path='/projects' component={Projects} />
    </Switch>
  </main>
)

export default Main;
