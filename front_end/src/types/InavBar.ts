export interface dropdownElementsList {
    dropdownElementName: string,
    dropdownElementLink: string
}

export interface INavButton {
    title: string,
    icon: string,
    isNewFeature: boolean,
    withCollapseWrapper: boolean,
    dropdownElementsList?: dropdownElementsList[]
}

export interface INavItemsList {
    navTitle: string,
    listElements: INavButton[]
}

export interface INavBar {
    customerTier: string,
    navItemsList: INavItemsList[]
}

export interface INavBarState {
    navBarData: INavBar
}

export interface navBarState {
    pending: boolean,
    navBar: INavBar,
    error: string | null
}