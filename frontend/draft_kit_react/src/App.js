import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import LeaguePage from './pages/LeaguePage.js'
import ResearchPage from './pages/ResearchPage.js'
import MockDraftPage from './pages/MockDraftPage.js'
import LoginPage from './pages/LoginPage.js'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/league" component={LeaguePage} />
            <Route exact path="/research" component={ResearchPage} />
            <Route exact path="/mockdraft" component={MockDraftPage} />
            <Route exact path="/login" component={LoginPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App