import {
    call,
    fork,
    put,
    take,
    delay,
    takeLatest,
    select,
    takeEvery,
    takeLeading
} from 'redux-saga/effects'
import * as catTypes from './../constants/ManageCat'
import * as productTypes from './../constants/ManageProduct'
import * as loginTypes from './../constants/LoginAdmin'
import { addCat, getCat, updateCat, deleteCat } from './../apis/ManageCat'
import { STATUS_CODE } from './../constants/index'
import { addCatFailed, addCatSuccess, deleteCatFailed, deleteCatSuccess, fetchListCatFailed, fetchListCatSuccess, updateCatFailed, updateCatSuccess } from '../action/ManageCat';
import { fetchListProductSuccess, fetchListProductFailed, addProductSuccess, addProductFailed } from './../action/ManageProduct'
import { getLogin } from '../apis/LoginAdmin'
import { checkLoginAdminFailed, checkLoginAdminSucess } from '../action/LoginAdmin'
import { showLoading } from '../action/LoadingUserAdmin'
import { getProduct, addProduct } from '../apis/ManageProduct'
function* watchFetchListCatAction() {
    while(true){
        const resp = yield call(getCat);
        const { status, data } = resp;
        if(status == STATUS_CODE.SUCCESS){
            yield put(fetchListCatSuccess(data))
        }else{
            yield put(fetchListCatFailed(data))
        }
    }
}


function* watchCheckLoginAdmin(){
    while(true){
        const resp = yield call(getLogin);
        // yield put(showLoading())
        const { status, data } = resp;
        if(status == STATUS_CODE.SUCCESS){
            yield put(checkLoginAdminSucess(data))
        }else{
            yield put(checkLoginAdminFailed(data))
        }
    }
}

function* addCatSaga({ payload }){
    const { name, slug, createdAt } = payload
    yield take(catTypes.FETCH_CAT)
    const resp = yield call(addCat, {
        name,
        slug,
        createdAt
    })
    if(resp.status === STATUS_CODE.CREATED){
        yield put(addCatSuccess(resp.data))
    }else{
        yield put(addCatFailed(resp.data))
    }
}

function* updateCatSaga({ payload }){
    const { name, slug, createdAt } = payload
    const catEditing = yield select(state => state.cat.catEditing)
    const resp = yield call(
        updateCat,
        {name, slug, createdAt},
        catEditing.id
    )
    const { data } = resp
    if (resp.status === STATUS_CODE.SUCCESS) {
        yield put(updateCatSuccess(data))
    } else {
        yield put(updateCatFailed(data))
    }
}

function* deleteCatSaga({ payload }){
    const { id } = payload;
    const resp = yield call(deleteCat, id);
    if (resp.status === STATUS_CODE.SUCCESS) {
        yield put(deleteCatSuccess(id))
    } else {
        yield put(deleteCatFailed(resp.data))
    }
}

function* watchFetchListProductAction() {
    while(true){
        const resp = yield call(getProduct)
        const { status, data } = resp
        if(status == STATUS_CODE.SUCCESS){
            yield put(fetchListProductSuccess(data))
        }else{
            yield put(fetchListProductFailed(data))
        }
    }
}

function* addProductSaga({ payload }){
    const { code, name, cat, slug, desc, price, cat_id, image } = payload
    yield take(productTypes.FETCH_PRODUCT)
    const resp = yield call(addProduct, {
        code,
        name,
        cat,
        slug,
        desc,
        price,
        cat_id,
        image
    })
    console.log(resp);
    if(resp.status === STATUS_CODE.CREATED){
        yield put(addProductSuccess(resp.data))
    }else{
        yield put(addProductFailed(resp.data))
    }
}

function* rootSaga(){
    yield fork(watchFetchListCatAction)
    yield fork(watchFetchListProductAction)
    yield takeLatest(catTypes.ADD_CAT, addCatSaga)
    yield takeLatest(catTypes.UPDATE_CAT, updateCatSaga)
    yield takeLatest(catTypes.DELETE_CAT, deleteCatSaga)
    yield fork(watchCheckLoginAdmin)
    yield takeLatest(productTypes.ADD_PRODUCT, addProductSaga)
}

export default rootSaga;
