import React from 'react';

import Grid from '@mui/material/Grid';
import NavBar from '../../Components/NavBar/NavBar'

const Home: React.FC = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <NavBar/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
