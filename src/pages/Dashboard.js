import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

import DashboardHeader from '../components/DashboardHeader'
import ErrorBoundary from '../components/ErrorBoundary'

const Dashboard = () => {
    const theme = useTheme();

    return (
        <div>
          <Helmet>
            <title>Cryptocurrency Dashboard</title>
          </Helmet>
          <Box
           sx={{
            backgroundColor: theme.palette.background.default,
            minHeight: '100%',
            py: 8
           }}
          >
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    <ErrorBoundary>
                        <DashboardHeader />
                    </ErrorBoundary>
                </Grid>
            </Container>
          </Box>
        </div>
    );
};

export default Dashboard;