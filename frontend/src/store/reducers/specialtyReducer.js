const initialState = {
    specialities: null,
}

export default function specialtyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SPECIALTIES':
            return {
                ...state,
                specialities: action.specialities
            }
            default:
                return state;
    }
}