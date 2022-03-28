import * as catConstants from './../constants/ManageCat'
import * as loginAdminConstants from './../constants/LoginAdmin'
import { toastError, toastSuccess } from '../helpers/toastHelper'
const initialState = {
    listCat: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case catConstants.FETCH_CAT: {
            return {
                ...state,
                listCat: []
            }
        }
        case catConstants.FETCH_CAT_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                listCat: data
            }
        }
        case catConstants.FETCH_CAT_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
                listCat: []
            }
        }
        case catConstants.ADD_CAT: {
            return {
                ...state
            }
        }
        case catConstants.ADD_CAT_SUCCESS: {
            const { data } = action.payload
            console.log(data);
            toastSuccess('Thêm danh mục thành công!')
            return {
                ...state,
                listCat: [data].concat(state.listCat)
            }
        }
        case catConstants.ADD_CAT_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state
            }
        }
        case catConstants.SET_CAT_EDITING: {
            const { cat } = action.payload
            return {
                ...state,
                catEditing: cat
            }
        }
        case catConstants.UPDATE_CAT: {
            return {
                ...state
            }
        }
        case catConstants.UPDATE_CAT_SUCCESS: {
            const { data } = action.payload
            const { listCat } = state;
            const index = listCat.findIndex(item => item.id === data.id)
            if (index !== -1) {
                const newList = [
                    ...listCat.slice(0, index),
                    data,
                    ...listCat.slice(index + 1)
                ]
                toastSuccess('Cập nhật danh mục thành công!')
                return {
                    ...state,
                    listCat: newList
                }
            }
        }
        case catConstants.UPDATE_CAT_FAILED: {
            const { error } = action.payload
            toastError(error);
            return {
                ...state,
            }
        }
        case catConstants.DELETE_CAT: {
            return {
                ...state
            }
        }
        case catConstants.DELETE_CAT_SUCCESS: {
            const { data: catId } = action.payload
            toastSuccess('Xóa danh mục thành công!')
            return {
                ...state,
                listCat: state.listCat.filter(item => item.id !== catId)
            };
        }
        case catConstants.DELETE_CAT_FAILED: {
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