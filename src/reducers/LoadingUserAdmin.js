
import * as Types from '../constants/LoadingUserAdmin'
import { toastError, toastSuccess } from '../helpers/toastHelper'

const initialState = {
    showLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_LOADING: {
            const { success } = action.payload
            toastSuccess(success)
            return {
                ...state,
                showLoading: true
            }
        }
        case Types.HIDE_LOADING: {
            return {
                ...state,
                showLoading: false
            }
        }
        default:
            return state
    }
}

export default reducer;
