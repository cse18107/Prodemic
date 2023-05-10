import { put, takeEvery } from "redux-saga/effects";
import { createUserApi, editUserApi, getUserApi } from "../../api";
import { createUserSlice, editUserSlice, getUserSlice } from "../slice/user";
import { CREATE_USER, EDIT_USER, GET_USER } from "../type";


export function* getUserByUserName(user) {
    const userData = yield getUserApi(user);
    yield put(getUserSlice(userData.data.data));
}

export function* createUser(user) {
    console.log(user)
    const userData = yield createUserApi(user.user);
    yield put(createUserSlice(userData.data.data));
}

export function* editUserByUserName(user) {
    const userData = yield editUserApi(user.user);
    yield put(editUserSlice(userData.data.data));
}

export function* watchUserAsync (){
    yield takeEvery(GET_USER, getUserByUserName);
    yield takeEvery(CREATE_USER, createUser);
    yield takeEvery(EDIT_USER, editUserByUserName);
}