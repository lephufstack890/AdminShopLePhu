import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import catReducer from './ManageCat'
import modalCatReducer from './ModalCat'
import loginAdminReducer from './LoginAdmin'
import loadingUserAdminReducer from './LoadingUserAdmin'
import productReducer from './ManageProduct'

const rootReducer = combineReducers({
    cat: catReducer,
    modalCat: modalCatReducer,
    loginAdmin: loginAdminReducer,
    loadingUserAdmin: loadingUserAdminReducer,
    product: productReducer,
    form: formReducer
})

export default rootReducer;