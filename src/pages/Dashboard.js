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

import Spacer from '../components/Spacer'
import CoinMarkets from "../components/tables/CoinMarkets";
import AreaCharts from "../components/charts/AreaCharts";
import BarChart from "../components/charts/BarCharts";

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

                        {/* Coin Market section  */}
                        <Grid item xs={12}>
                            <ErrorBoundary>
                                <CoinMarkets />
                            </ErrorBoundary>
                        </Grid>
                        
                        {/* Area Chart section  */}
                        <Grid item xs={12}>
                            <ErrorBoundary>
                                <AreaCharts />
                            </ErrorBoundary>
                        </Grid>

                        {/* Bar Chart section  */}
                        <Grid item xs={12}>
                            <ErrorBoundary>
                                <BarChart />
                            </ErrorBoundary>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <ErrorBoundary>
              <Spacer />
            </ErrorBoundary>
        </ErrorBoundary>
    );
};

export default Dashboard;