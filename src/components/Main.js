import React from 'react';
import LandingPage from './LandingPage';
import {Switch, Route} from 'react-router-dom';
import Aboutme from './Aboutme';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact'

const Main =() =>(
<Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={Aboutme} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
</Switch>
)

export default Main;