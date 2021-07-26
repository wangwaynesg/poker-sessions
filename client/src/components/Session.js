import React from "react";
import { Link } from "react-router-dom";
// import ViewSession from "./ViewSession";

// import { BrowserRouter as Router, Route } from "react-router-dom";


const Session = (props) => {
    return (
        <tr>
            <td>
                {/* <Route path="/sessions/:id" component={ViewSession}/> */}
                <Link to={"/sessions/"+props.session._id}>{props.session.sessionName}</Link>
            </td>
            <td>
                {props.session.players.length}
            </td>
            <td>{props.session.sessionDate.substring(0, 10)}</td>
        </tr>
    );
}

export default Session;