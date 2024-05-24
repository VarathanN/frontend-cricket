import './App.css';
import * as React from 'react';
import Userform from './component/Userform';
import Login from './component/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Player from './component/Player';
import Pill from './component/Pill';
import Slide from './component/Slide';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route
            exact
            path="/"
            element={<Login />}
          />
          <Route
            path="/Player"
            element={<Player name={"varathan"}/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
