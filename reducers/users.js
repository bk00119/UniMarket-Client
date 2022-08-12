export default (user = [], action) => {
    // Object.assign(action, action.payload);
    switch (action.type) {
        case "FETCH":
            return action.payload;
        case "CREATE":
            return [...user, action.payload];
            // return new Set([action.apyload]);
        case "LOGOUT":
            return null;
        default:
            return user;
    }
};