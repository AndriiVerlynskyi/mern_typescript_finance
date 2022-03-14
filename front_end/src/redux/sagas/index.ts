import { all } from 'redux-saga/effects';
import navBarSaga from './navBar'


export default function* rootSaga() {
    yield all([
        navBarSaga(),
    ]);
}