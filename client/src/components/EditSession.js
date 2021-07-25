import React from "react";
import { useSelector } from "react-redux";

const EditSession = () => {
    const sessions = useSelector((state) => state.sessions);

    


    return (
        <h1>Edit Session</h1>
    );
}

export default EditSession;