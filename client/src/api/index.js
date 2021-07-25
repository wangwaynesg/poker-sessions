import axios from "axios";

const url = "http://localhost:5000/sessions/"

export const fetchSessions = () => axios.get(url);
export const fetchSession = (id) => axios.get(url, id);
export const createSession = (newSession) => axios.post(url, newSession);