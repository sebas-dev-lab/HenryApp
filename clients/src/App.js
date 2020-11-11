import React from "react";
import "./App.css";
import Home from "./Componentes/Home";
import Navbar from "./Componentes/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Componentes/Login.jsx";
import Email from "./Componentes/Email";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Navbar} />
        <Switch>
          <Route exact path="/alumnos" component={Email} />
          <Route exact path="/instructor" component={Email} />
          <Route exact path="/admin" component={Email} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/invitar" component={Email} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
