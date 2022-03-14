import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { INavButton } from '../../types/InavBar';
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import NewFeatureFlag from '../General/NewFeatureFlag';
import HomeIcon from '@mui/icons-material/Home';
import { Style } from '@mui/icons-material';

export const StyledNavButton = styled(Button)( ({theme}) => ({
    color: theme.palette.secondary.main,
    fontWeight: '600',
    textTransform: 'capitalize',
    width: '100%',
    padding: '9px 24px',
    display: 'inline-flex',
    position: 'relative',
    justifyContent: 'inherit',
    alignItems: 'center',
    borderRadius: '8px',
    fontSize: '0.875rem',
    '&:hover': {
        background: theme.palette.secondary.light
    }
}))

interface INavButtonProps {
    navButtonItem: INavButton
}

const NavButton: React.FC <INavButtonProps> = ({ navButtonItem }) => {
    const [endIconFlag, setEndIconFlag] = useState(<></>);

    useEffect( () => {
        if (navButtonItem.isNewFeature) {
            setEndIconFlag(<NewFeatureFlag/>)
        }
    }, [])

    return (
        <StyledNavButton startIcon={<HomeIcon/>} endIcon={endIconFlag}>
            {navButtonItem.title}
        </StyledNavButton>
    )
}

export default NavButton;