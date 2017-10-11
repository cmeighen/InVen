import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import ContainerPage from '../containers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <div>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/container/:id" component={ContainerPage} />
      </main>
</div>
  </MuiThemeProvider>
);

export default App;