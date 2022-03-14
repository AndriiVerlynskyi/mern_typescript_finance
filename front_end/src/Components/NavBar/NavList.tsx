import React from 'react';
import { styled } from '@mui/material/styles';
import { INavItemsList, INavButton } from '../../types/InavBar';
import NavButton from './NavButton';
import NavButtonWithCollapse from './NavButtonWithCollapse';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'


interface INavListProps {
    navBarItemListData: INavItemsList
}

const StyledListItemBtn = styled(ListItem)( ({theme}) => ({
    padding: '0px 16px',
    marginBottom: '4px',
}))

const StyledListItemTitle = styled(ListItem)( ({theme}) => ({
    background: 'none',
    color: 'rgb(107, 114, 128)',
    fontSize: '0.75rem',
    fontWeight: '700',
    lineHeight: '2.5',
    marginLeft: '32px',
    padding: '0px'
}))

const NavList: React.FC <INavListProps> = ({ navBarItemListData }) => {

    return (
        <List>
            <StyledListItemTitle>{navBarItemListData.navTitle}</StyledListItemTitle>
            {navBarItemListData.listElements.map( (navButtonItem : INavButton) => {
                if (navButtonItem.withCollapseWrapper) {
                    return(
                    <StyledListItemBtn key={navButtonItem.title}>
                        <NavButtonWithCollapse navButtonItem={navButtonItem} />
                    </StyledListItemBtn>
                    )
                } else {
                    return(
                        <StyledListItemBtn key={navButtonItem.title}>
                            <NavButton navButtonItem={navButtonItem} />
                        </StyledListItemBtn>
                    )
                }
                })
            }
        </List>
    )
}

export default NavList