import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import ContainersPage from '../containers'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/containers">View Containers</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/containers" component={ContainersPage} />
    </main>
  </div>
);

export default App;