
import * as Types from './../constants/ModalCat'

const initialState = {
    title: 'Thêm danh mục',
    component: '',
    nameButton: 'Thêm mới',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MODAL_CAT_TITLE: {
            const { title } = action.payload
            return {
                ...state,
                title
            }
        }
        case Types.CHANGE_MODAL_CAT_CONTENT: {
            const { component } = action.payload
            return {
                ...state,
                component
            }
        }
        case Types.CHANGE_MODAL_CAT_BUTTON: {
            const { nameButton } = action.payload
            return {
                ...state,
                nameButton
            }
        }
        default:
            return state
    }
}

export default reducer;
