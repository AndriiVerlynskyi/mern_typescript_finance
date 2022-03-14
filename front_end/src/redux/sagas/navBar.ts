import { AxiosResponse } from 'axios';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import { getNavBarData } from './api/navBarApi';
import { Action } from "redux-actions";
import { INavBar } from "../../types/InavBar";
import { NavBarActions } from '../actions';


function* navBarWorker (action: Action<INavBar>) {
    try{
        const { data } = yield call(getNavBarData);

        yield put(NavBarActions.getNavBarDataSuccess({
            navBarData: data[0]
        }))
    } catch (err) {
        yield put(
            NavBarActions.getNavBarDataFailure({
                error: err
            })
        )
        console.error(err)
    }
}

export default function* watchNavBar() {
    yield takeLatest(NavBarActions.Type.GET_NAV_BAR_DATA, navBarWorker)
}