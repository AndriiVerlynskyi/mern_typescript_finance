import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { NavBarActions } from '../../redux/actions';
import { INavBar } from '../../types/InavBar';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import NavList from './NavList';


const StyledNavBarContainer = styled(Container)( ({theme}) => ({
    width: '280px',
    height: window.innerHeight,
    background: 'rgb(17, 24, 39)',
    '&&': {
        padding: '0px'
    }
}))

const NavBar: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(NavBarActions.getNavBarData())
    }, [])
    
    const navBarData = useAppSelector( state => {
            if (!!state.navBar) {
                return state.navBar.navBarData
            }
    })

    return (
        <StyledNavBarContainer>
            <Divider/>
            <Box display={{xs: 'none', sm: 'none', md: 'block', lg:'block', xl:'block'}}>
                { !!navBarData && navBarData.navItemsList.map( navItem => {
                    return (
                        <NavList key={navItem.navTitle} navBarItemListData={navItem}/>
                    )
                })}
            </Box>
        </StyledNavBarContainer>
    )
}

export default NavBar
