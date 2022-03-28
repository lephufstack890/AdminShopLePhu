import * as productConstants from './../constants/ManageProduct'

export const fetchListProduct = () => {
    return {
        type: productConstants.FETCH_PRODUCT
    }
}

export const fetchListProductSuccess = (data) => {
    return {
        type: productConstants.FETCH_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListProductFailed = error => {
    return {
        type: productConstants.FETCH_PRODUCT_FAILED,
        payload: {
            error
        }
    }
}

export const addProduct = (code, name, cat, slug, desc, price, image, cat_id) => {
    return {
        type: productConstants.ADD_PRODUCT,
        payload: {
            code,
            name,
            cat,
            slug,
            desc,
            price,
            image,
            cat_id
        }
    }
}

export const addProductSuccess = data => {
    return {
        type: productConstants.ADD_PRODUCT_SUCCESS,
        payload: {
            data
        }
    }
}

export const addProductFailed = error => {
    return {
        type: productConstants.ADD_PRODUCT_FAILED,
        payload: {
            error
        }
    }
}