import * as loginAdminConstants from './../constants/LoginAdmin'
export const checkLoginAdmin = () => {
    return {
        type: loginAdminConstants.CHECK_LOGIN_ADMIN
    }
}

export const checkLoginAdminSucess = data => {
    return {
        type: loginAdminConstants.CHECK_LOGIN_ADMIN_SUCCESS,
        payload: {
            data
        }
    }
}

export const checkLoginAdminFailed = error => {
    return {
        type: loginAdminConstants.CHECK_LOGIN_ADMIN_FAILED,
        payload: {
            error
        }
    }
}