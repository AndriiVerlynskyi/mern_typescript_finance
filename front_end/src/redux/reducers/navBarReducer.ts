import { handleActions } from 'redux-actions';
import { INavBar, INavBarState } from '../../types/InavBar';
import { NavBarActions } from '../actions';

const initialState = null;

export const navBarReducer = handleActions <INavBarState | null, INavBarState>({
    [NavBarActions.Type.GET_NAV_BAR_DATA]: (state, action) => state,
    [NavBarActions.Type.GET_NAV_BAR_DATA_SUCCESS]: (state, action) => action.payload,
    [NavBarActions.Type.GET_NAV_BAR_DATA_FAILURE]: (state, action) => action.payload
}, initialState)