import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={ LandingPage } />
        <Switch>

        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
