import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    sessionName: {
        type: String,
        trim: true,
        required: true
    },
    buyInAmount: Number,
    chipsPerBuyIn: Number,
    sessionDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    players: [{
        playerName: String,
        playerBuyIns: Number
    }],
    logs: [
        { type: String, required: true }
    ]
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;