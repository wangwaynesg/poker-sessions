import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getSessions } from "./actions/sessions";

import Navbar from "./components/Navbar";
import SessionList from "./components/SessionList";
import CreateSession from "./components/CreateSession";
import About from "./components/About";
import ViewSession from "./components/ViewSession";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSessions());
    }, [dispatch]);

    return (
        <Router>
            <Navbar />

            <Route path="/" exact component={SessionList} />
            <Route path="/create" component={CreateSession} />
            <Route path="/about" component={About} />
            <Route path="/sessions/:id" component={ViewSession}/>
        </Router>
    );
}

export default App;