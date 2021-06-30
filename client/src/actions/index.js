import users from "../apis/users";

export const createUser = formValues => async dispatch => {
    users.post("/users", formValues);
}
