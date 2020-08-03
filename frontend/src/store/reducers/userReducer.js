let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
    loggedInUser: localLoggedinUser,
    users: [],
    tags: [],
    filterBy: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, loggedInUser: action.user };

        case 'SET_FILTER':
            return { ...state, filterBy: action.filter  };

        case 'LOG_OUT':
            return { ...state, loggedInUser: action.user };

        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            };

        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            };


        case 'SET_TAGS':
            return {
                ...state,
                tags: action.tags
            };
        default:
            return state;
    }
}
