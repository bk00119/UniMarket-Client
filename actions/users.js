import * as api from "../api";

//POST
export const createUser = (user) => async(dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type: "CREATE" , payload: data })
    } catch(error) {
        console.log(error);
    }
}

//GET
export const getUserByGoogleId = (goog_id) => async(dispatch) => {
    try {
        const data = await api.getUserByGoogleId(goog_id);
        dispatch({ type: "FETCH" , payload: data });
    } catch(error) {
        console.log(error);
    }
}