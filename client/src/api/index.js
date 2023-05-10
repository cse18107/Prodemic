import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/app";

export const createUserApi = async (user) => axios.post('/user',user);
export const getUserApi = async (user) => axios.get(`/user/${user.user_name}`);
export const editUserApi = async (user) => axios.patch(`/user/${user.user_name}`, user);