import axios from "axios";

const item_url = "https://api.myunimarket.com/items";

//USERS
//POST
export const createItem = (new_item) => axios.post(`${item_url}/create`, new_item);

//GET
export const getItemForItemPage = (item_id) => axios.get(`${item_url}/${item_id}`);
