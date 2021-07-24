import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    name: String,
    buyInAmount: Number,
    chipsPerBuyIn: Number,
    date: {
        type: Date,
        default: new Date()
    },
    players: [{
        name: String,
        buyIns: Number
    }],
    logs: [String]
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;