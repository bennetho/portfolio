import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Media from 'react-media';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Skill from './pages/Skill';
import Navbar from './components/Navbar';
import SideProfile from './components/SideProfile';
import About from './pages/About';
import NavbarBig from './components/NavbarBig';
import Service from './components/Service';

function App() {
  return (
    <>
      <NavbarBig />
      <div className='app'>
        <SideProfile />
        <Media query='(min-width: 700px)'>
          {(screenIsSmall) =>
            screenIsSmall ? (
              // small screen has no redirect
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact/' component={Contact} />
                <Route exact path='/project/' component={Project} />
                <Route exact path='/service/' component={Service} />
                <Route exact path='/about/' component={About} />
                <Route exact path='/skill/' component={Skill} />
              </Switch>
            ) : (
              // large screen does!
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/' component={Home} />
                <Redirect from='/' exact to='/home/' component={Home} />
              </Switch>
            )
          }
        </Media>

        {/* <Switch>
          <Route exact path='/contact/' component={Contact} />
          <Route exact path='/project/' component={Project} />
          <Route exact path='/about/' component={About} />
          <Route exact path='/skill/' component={Skill} />
        </Switch> */}
      </div>
      {/* <Route component={Error} /> */}
    </>
  );
}

export default App;
