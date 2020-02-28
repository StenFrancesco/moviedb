import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import DiscoverMoviePage from "./pages/DiscoverMoviePage"
import AboutPage from "./pages/AboutPage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact={true} path="/discover" component={DiscoverMoviePage} />
        <Route exact={true} path="/about" component={AboutPage} />
        <Route exact={true} path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
