import * as catConstants from './../constants/ManageCat'
import * as loginAdminConstants from './../constants/LoginAdmin'
import { toastError, toastSuccess } from '../helpers/toastHelper'
const initialState = {
    listUser: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginAdminConstants.CHECK_LOGIN_ADMIN: {
            return {
                ...state,
                listUser: []
            }
        }
        case loginAdminConstants.CHECK_LOGIN_ADMIN_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                listUser: data
            }
        }
        case loginAdminConstants.CHECK_LOGIN_ADMIN_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
                listUser: []
            }
        }
        default:
            return state
    }
}

export default reducer;