// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import ModeSelector from './ModeSelector';
import LightModePage from './LightModePage';
import DarkModePage from './DarkModePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ModeSelector} />
        <Route path="/light-mode" component={LightModePage} />
        <Route path="/dark-mode" component={DarkModePage} />
      </Switch>
    </Router>
  );
};

export default App;
