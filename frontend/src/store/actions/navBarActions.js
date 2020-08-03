export function toggleNavBar() {
    return async dispatch => {
        try {
            dispatch(_toggleNav());
        } catch (err) {
            console.log('NavBar: err in ToggleNavBar', err);
            throw err
        }
    };
}


function _toggleNav() {
    return {
        type: 'TOGGLE_NAV',
    };
}

