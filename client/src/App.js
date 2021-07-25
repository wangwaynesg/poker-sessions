import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getSessions } from "./actions/sessions";

import Navbar from "./components/Navbar";
import SessionList from "./components/Sessions/SessionList";
import CreateSession from "./components/CreateSession";
import EditSession from "./components/EditSession";

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
            <Route path="/sessions/:id" component={EditSession} />
        </Router>
    );
}

export default App;