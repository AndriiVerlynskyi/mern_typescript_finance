import React from 'react';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const StyledContainerForNewFlag = styled(Container)( ({theme}) => ({
    '&&':{
        height: '24px',
        padding: '8px'
    },
    width: 'auto',
    alignItems: 'center',
    backgroundColor: 'rgb(16, 185, 129)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '16px',
    display: 'inherit', // is displayed inline-flex by the inharitance
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)'
}));

const NewFeatureFlag: React.FC = () => {
    return (
        <StyledContainerForNewFlag>
            <Box
            component="p" 
            sx={{
                fontSize: '10px',
                padding: 'none'
            }}
            >
                NEW
            </Box>
        </StyledContainerForNewFlag>
    )
}

export default NewFeatureFlag