import userService from '../../service/userService'


export function loadSpecialty() {
    return dispatch => {
        userService.query()
            .then(specialties => {
                dispatch({ type: 'SET_SPECIALTIES', specialties });
            })
    }
}