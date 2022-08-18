import axios from "axios";

const item_url = "https://api.myunimarket.com/items";

//USERS
//POST
export const createItem = (new_item) => axios.post(`${item_url}/create`, new_item);

//GET
export const getItems = (loadedNumItems) => axios.get(`${item_url}/all/${loadedNumItems}`);
export const getItemForItemPage = (item_id) => axios.get(`${item_url}/item/${item_id}`);
export const getItemsFilter = (loadedNumItems, itemFilter, sortType) => axios.get(`${item_url}/filter/${loadedNumItems}/${itemFilter.locations}/${itemFilter.categories}/${itemFilter.minCost}/${itemFilter.maxCost}/${sortType}`);