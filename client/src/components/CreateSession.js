import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createSession } from "../actions/sessions";

const CreateSession = () => {
    const dispatch = useDispatch();

    const [sessionData, setSessionData] = useState({
        sessionName: "",
        buyInAmount: 20,
        chipsPerBuyIn: 200,
        players: [],
    });

    const [playerList, setPlayerList] = useState([]);

    const [netProfit, setNetProfit] = useState(0);

    const handlePlayerInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...playerList];
        playerList[index][name] = value;

        playerList[index]["playerProfit"] = sessionData.buyInAmount * (playerList[index]["playerChips"] / sessionData.chipsPerBuyIn - playerList[index]["playerBuyIns"]);
        
        setPlayerList(list);
        setSessionData({ ...sessionData, players:list });

        var tempProfit = 0;
        list.forEach(x => {
            tempProfit = tempProfit + x.playerProfit;
        })
        setNetProfit(tempProfit);
    };

    const handlePlayerRemoveClick = (index, e) => {
        e.preventDefault();
        const temp = playerList[index]["playerProfit"];
        const list = [...playerList];
        list.splice(index, 1);
        setPlayerList(list);
        setSessionData({ ...sessionData, players:list });
        setNetProfit(netProfit - temp);
    };

    const handlePlayerAddClick = (e) => {
        e.preventDefault();
        const list = [...playerList];
        list.push({
            playerName: "",
            playerBuyIns: 1,
            playerChips: "",
            playerProfit: -sessionData.buyInAmount
        });

        setPlayerList(list);
        setSessionData({ ...sessionData, players:list });
        setNetProfit(netProfit - sessionData.buyInAmount);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(sessionData);
        dispatch(createSession(sessionData));
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
                        placeholder="Boon Lay with the boys"
                        value={sessionData.sessionName} 
                        onChange={(e) => setSessionData({ ...sessionData, sessionName: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Buy-in amount (SGD):</label>
                    <input type="text"
                        required 
                        className="form-control" 
                        // placeholder="How much is one buy-in?"
                        value={sessionData.buyInAmount} 
                        onChange={(e) => setSessionData({ ...sessionData, buyInAmount:e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Number of chips per buy-in:</label>
                    <input type="text"
                        required 
                        className="form-control" 
                        // placeholder="How many chips do you get with one buy-in?"
                        value={sessionData.chipsPerBuyIn} 
                        onChange={(e) => setSessionData({ ...sessionData, chipsPerBuyIn:e.target.value })}
                    />
                </div>

                <h3>Players</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Buy-ins</th>
                            <th>Cash-out chips</th>
                            <th>Profit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerList.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <input name="playerName" value={x.playerName} onChange={(e) => handlePlayerInputChange(e, i)}/>
                                    </td>
                                    <td>
                                        <input name="playerBuyIns" value={x.playerBuyIns} onChange={(e) => handlePlayerInputChange(e, i)}/>
                                    </td>
                                    <td>
                                        <input name="playerChips" value={x.playerChips} onChange={(e) => handlePlayerInputChange(e, i)}/>
                                    </td>
                                    <td>
                                        {x.playerProfit ? "$" + x.playerProfit : "-"}
                                    </td>
                                    <td>
                                        <button onClick={(e) => handlePlayerRemoveClick(i, e)}>Remove</button>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td>
                                <button onClick={(e) => handlePlayerAddClick(e)}>Add player</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td>{playerList.length === 0 ? "" : "$" + netProfit}</td>
                        </tr>
                        
                    </tbody>
                </table>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="OK"/>
                </div>
            </form>
        </div>
    );
}

export default CreateSession;