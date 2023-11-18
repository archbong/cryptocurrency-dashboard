import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

import DashboardHeader from '../components/DashboardHeader'
import ErrorBoundary from '../components/ErrorBoundary'
import AssetPlatforms from "../components/statistics/AssetPlatorm";
import Exchanges from "../components/statistics/Exchanges";
import Categories from "../components/statistics/Categories";
import MarketIndexes from "../components/statistics/MarketIndexes";

const Dashboard = () => {
    const theme = useTheme();

    return (
        <ErrorBoundary>
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
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <ErrorBoundary>
                                <Categories />
                            </ErrorBoundary>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <ErrorBoundary>
                                <Exchanges />
                            </ErrorBoundary>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <ErrorBoundary>
                                <AssetPlatforms />
                            </ErrorBoundary>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <ErrorBoundary>
                                <MarketIndexes />
                            </ErrorBoundary>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ErrorBoundary>
    );
};

export default Dashboard;