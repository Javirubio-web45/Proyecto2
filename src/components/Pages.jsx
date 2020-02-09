import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Recom from "./Recom";
import Rm from "./Rm";
import Equiv from "./Equivalencia";

function Pages() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Recom">Recomendaciones</Link>
            </li>
            <li>
              <Link to="RM">1Rm</Link>
            </li>
            <li>
              <Link to="Equivalencia">Equivalencias</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Recom">
            <Recom />
          </Route>
          <Route path="/Rm">
            <Rm />
          </Route>
          <Route path="/Equivalencia">
            <Equiv />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Pages;
