import * as modalTypes from './../constants/ModalCat'

export const changeModalCatTitle = title => ({
    type: modalTypes.CHANGE_MODAL_CAT_TITLE,
    payload: {
        title
    }
})

export const changeModalCatContent = component => ({
    type: modalTypes.CHANGE_MODAL_CAT_CONTENT,
    payload: {
        component
    }
})

export const changeModalCatButton = nameButton => ({
    type: modalTypes.CHANGE_MODAL_CAT_BUTTON,
    payload: {
        nameButton
    }
})
