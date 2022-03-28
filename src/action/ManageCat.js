import * as catConstants from './../constants/ManageCat'


export const fetchListCat = () => {
    return {
        type: catConstants.FETCH_CAT
    }
}

export const fetchListCatSuccess = (data) => {
    return {
        type: catConstants.FETCH_CAT_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListCatFailed = error => {
    return {
        type: catConstants.FETCH_CAT_FAILED,
        payload: {
            error
        }
    }
}

export const addCat = (name, slug, createdAt) => {
    return {
        type: catConstants.ADD_CAT,
        payload: {
            name,
            slug,
            createdAt
        }
    }
}

export const addCatSuccess = data => {
    return {
        type: catConstants.ADD_CAT_SUCCESS,
        payload: {
            data
        }
    }
}

export const addCatFailed = error => {
    return {
        type: catConstants.ADD_CAT_FAILED,
        payload: {
            error
        }
    }
}

export const setCatEditing = cat => {
    return {
        type: catConstants.SET_CAT_EDITING,
        payload: {
            cat
        }
    }
}

export const updateCat = (name, slug, createdAt) => {
    return {
        type: catConstants.UPDATE_CAT,
        payload: {
            name,
            slug,
            createdAt
        }
    }
}

export const updateCatSuccess = data => {
    return {
        type: catConstants.UPDATE_CAT_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateCatFailed = error => {
    return {
        type: catConstants.UPDATE_CAT_FAILED,
        payload: {
            error
        }
    }
}

export const deleteCat = id => {
    return {
        type: catConstants.DELETE_CAT,
        payload:{
            id
        }
    }
}

export const deleteCatSuccess = data => {
    return {
        type: catConstants.DELETE_CAT_SUCCESS,
        payload: {
            data
        }
    }
}

export const deleteCatFailed = error => {
    return {
        type: catConstants.DELETE_CAT_FAILED,
        payload: {
            error
        }
    }
}

