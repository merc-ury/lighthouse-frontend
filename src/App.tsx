import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserDataProvider } from './data/UserDataContext';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { AboutPage } from './components/AboutPage';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <UserDataProvider>
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
    </UserDataProvider>
  );
};

export default App;
