import axios from "axios";

const user_url = "https://api.myunimarket.com/users";

//USERS
//POST
export const createUser = (new_user) => axios.post(`${user_url}/create`, new_user);

//GET
export const getUserByGoogleId = (goog_id, email) => axios.get(`${user_url}/${goog_id}/${email}`);
