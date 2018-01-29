import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Schedule from './Schedule';
import Projects16_17 from './projectComponent/Projects16_17';
import Projects17_18 from './projectComponent/Projects17_18';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/schedule' component={Schedule} />
      <Route exact path='/projects16_17' component={Projects16_17} />
      <Route exact path='/projects17_18' component={Projects17_18} />
    </Switch>
  </main>
)

export default Main;
