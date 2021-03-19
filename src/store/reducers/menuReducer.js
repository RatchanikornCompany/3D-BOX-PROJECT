// Action
const SET_VALUE_A = 'Menu/SET_VALUE_A'

// Initialize State
const initialState = {
    valueA: 250
}

// Default Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE_A:
            return {
                ...state,
                valueA: action.payload
            }
        default:
            return state
    }
}

// Action Creators
export const setValueA = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SET_VALUE_A,
            payload: data
        })
    }
}
