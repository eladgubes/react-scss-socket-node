
const initialState = {
    isSideOpen: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_NAV':
            // console.log(state.isSideOpen)
            return {
              isSideOpen: !state.isSideOpen
            };
        default:
            return state;
    }
}