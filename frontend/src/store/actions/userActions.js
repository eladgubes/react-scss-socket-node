import userService from '../../service/userService'
import reviewService from '../../service/reviewService';



// THUNK
export function removeUser(userId) {
    return async dispatch => {
        try {
            await userService.removeUser(userId);
            dispatch(_removeUser(userId));
        } catch (err) {
            console.log('UserActions: err in removeUser', err);
        }
    };
}
// THUNK
export function addReview(review) {
    return async dispatch => {
        try {
            await reviewService.addReview(review);
            // dispatch(_removeUser(userId));
        } catch (err) {
            console.log('UserActions: err in addReview', err);
        }
    };
}
// THUNK
export function getUserById(userId) {
    return async dispatch => {
        try {
            const currUser = await userService.getUserById(userId);
            dispatch(setUser(currUser));
        } catch (err) {
            console.log('UserActions: err in getUserById', err);
        }
    };
}// THUNK


export function loadUsers(filter) {

    return async dispatch => {
        try {
            const users = await userService.query(filter);
            dispatch(setFilter(filter))
            dispatch(setUsers(users));
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }
    };
}



// THUNK
export function login(userCreds) {
    return async dispatch => {
        const user = await userService.login(userCreds);
        dispatch(setUser(user));
    }
}
export function signup(userCreds) {
    return async dispatch => {
        const user = await userService.signup(userCreds);
        dispatch(setUser(user));
    };
}

export function logout() {
    return async dispatch => {
        await userService.logout();
        dispatch(_logout(null));
    };
}







export function setTags(tags) {
    return {
        type: 'SET_TAGS',
        tags
    };
}
export function setUser(user) {
    return {
        type: 'SET_USER',
        user
    };
}
export function _logout(user) {
    return {
        type: 'LOG_OUT',
        user
    };
}
function _removeUser(userId) {
    return {
        type: 'REMOVE_USER',
        userId
    };
}
function setUsers(users) {
    return {
        type: 'SET_USERS',
        users
    };
}
function setFilter(filter) {
    return {
        type: 'SET_FILTER',
        filter
    };
}



