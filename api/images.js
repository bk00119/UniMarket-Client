import axios from "axios";

const image_url = "https://api.myunimarket.com/images";

export const uploadImages = (user_id, images) => axios.post(`${image_url}/upload/${user_id}`, images);