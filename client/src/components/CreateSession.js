import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createSession } from "../actions/sessions";

const CreateSession = () => {
    const dispatch = useDispatch();

    const [sessionData, setSessionData] = useState({
        sessionName: "",
        buyInAmount: "",
        chipsPerBuyIn: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(sessionData);

        dispatch(createSession(sessionData));

        sessionData.sessionName = "";
        sessionData.buyInAmount = "";
        sessionData.chipsPerBuyIn = "";
    }; 

    return (
        <div> 
            <h3>New session</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Session name:</label>
                    <input type="text"
                        required 
                        className="form-control" 
                        placeholder="Boon Lay"
                        value={sessionData.sessionName} 
                        onChange={(e) => setSessionData({ ...sessionData, sessionName: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Buy-in amount (SGD):</label>
                    <input type="text"
                        required 
                        className="form-control" 
                        placeholder="20"
                        value={sessionData.buyInAmount} 
                        onChange={(e) => setSessionData({ ...sessionData, buyInAmount:e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Number of chips per buy-in:</label>
                    <input type="text"
                        required 
                        className="form-control" 
                        placeholder="200"
                        value={sessionData.chipsPerBuyIn} 
                        onChange={(e) => setSessionData({ ...sessionData, chipsPerBuyIn:e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Create"/>
                </div>
            </form>
        </div>
    );
}

export default CreateSession;