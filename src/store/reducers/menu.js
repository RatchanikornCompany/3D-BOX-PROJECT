// Action
const FETCH_BANK_MASTER_REQUEST = 'Bank/FETCH_BANK_MASTER_REQUEST'

// Initialize State
const initialState = {

}

// Default Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BANK_MASTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

// Action Creators
export const set = () => {
    return async (dispatch) => {

    }
}
