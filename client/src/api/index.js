import axios from "axios";

export const url = "https://poker-sessions.herokuapp.com/sessions/";
export const likes_url = "https://poker-sessions.herokuapp.com/likes/60fef2bd004c4f2dacede83a";

export const fetchSessions = () => axios.get(url);
export const createSession = (newSession) => axios.post(url, newSession);

export const fetchLikes = () => axios.get(likes_url);
export const updateLikes = (newLikes) => axios.put(likes_url, newLikes);