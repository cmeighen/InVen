import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import SiteHeader from '../header'
import ContainersPage from '../containers'
import ContainerPage from '../containers/components/containerPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => (
  <MuiThemeProvider>
    <div>
      <SiteHeader />
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/containers/" component={ContainersPage} />
        <Route exact path="/container/:id" component={ContainerPage} />
      </main>
</div>
  </MuiThemeProvider>
);

export default App;