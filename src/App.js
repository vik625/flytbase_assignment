import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navabar.component";
import BoxAssignment from "./components/BoxAssignment.component";

function App() {
    return (
        <Router>
            <Navbar />
            <br />

            <BoxAssignment />
        </Router>
    );
}

export default App;