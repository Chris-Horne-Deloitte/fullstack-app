// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateEntry from './components/CreateEntry';
import EditEntry from './components/EditEntry';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateEntry} />
        <Route path="/edit/:id" component={EditEntry} />
      </Switch>
    </Router>
  );
}

export default App;