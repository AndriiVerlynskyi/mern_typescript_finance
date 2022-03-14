import { INavBar } from "../../types/InavBar";

export interface IRootState {
    router: any,
    navBar: { 
        navBarData: INavBar
    }
}