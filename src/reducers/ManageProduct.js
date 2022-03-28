import * as productConstants from './../constants/ManageProduct'
import { toastError, toastSuccess } from '../helpers/toastHelper'
const initialState = {
    listProduct: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.FETCH_PRODUCT: {
            return {
                ...state,
                listProduct: []
            }
        }
        case productConstants.FETCH_PRODUCT_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                listProduct: data
            }
        }
        case productConstants.FETCH_PRODUCT_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
                listProduct: []
            }
        }
        case productConstants.ADD_PRODUCT: {
            return {
                ...state
            }
        }
        case productConstants.ADD_PRODUCT_SUCCESS: {
            const { data } = action.payload
            toastSuccess('Thêm sản phẩm thành công!')
            return {
                ...state,
                listProduct: [data].concat(state.listProduct)
            }
        }
        case productConstants.ADD_PRODUCT_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state
            }
        }
        default:
            return state
    }
}

export default reducer;