import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserLoginProvider } from './data/UserLoginContext';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { AboutPage } from './components/AboutPage';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <UserLoginProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserLoginProvider>
  );
};

export default App;
