import { createAction } from 'redux-actions';
import { INavBar } from '../../types/InavBar'

enum Type {
    GET_NAV_BAR_DATA = "GET_NAV_BAR_DATA",
    GET_NAV_BAR_DATA_SUCCESS = "GET_NAV_BAR_DATA_SUCCESS",
    GET_NAV_BAR_DATA_FAILURE = "GET_NAV_BAR_DATA_FAILURE"
}

const getNavBarData = createAction(Type.GET_NAV_BAR_DATA);
const getNavBarDataSuccess = createAction(Type.GET_NAV_BAR_DATA_SUCCESS);
const getNavBarDataFailure = createAction(Type.GET_NAV_BAR_DATA_FAILURE);



export const NavBarActions = {
    Type,

    getNavBarData,
    getNavBarDataSuccess,
    getNavBarDataFailure
}

export type NavBarActions = Omit<typeof NavBarActions, 'Type'>;