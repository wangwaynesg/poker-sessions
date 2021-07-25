import axios from "axios";

export const url = "http://localhost:5000/sessions/"

export const fetchSessions = () => axios.get(url);
export const createSession = (newSession) => axios.post(url, newSession);