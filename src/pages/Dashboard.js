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
import DoughnutChart from "../components/charts/DoughnutCharts";
import LineChart from "../components/charts/LineCharts";

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

                        {/* Exchanges section  */}
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <ErrorBoundary>
                                <Exchanges />
                            </ErrorBoundary>
                        </Grid>

                        {/* AssetPlatforms section  */}

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <ErrorBoundary>
                                <AssetPlatforms />
                            </ErrorBoundary>
                        </Grid>
                        {/* Market Indexes section  */}
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
                        <Grid item lg={6} xs={12}>
                            <ErrorBoundary>
                                <AreaCharts />
                            </ErrorBoundary>
                        </Grid>

                        {/* Bar Chart section  */}
                        <Grid item lg={6} xs={12}>
                            <ErrorBoundary>
                                <BarChart />
                            </ErrorBoundary>
                        </Grid>
                        {/* Doughnut Chart section  */}
                        <Grid item lg={6} xs={12}>
                            <ErrorBoundary>
                                <DoughnutChart />
                            </ErrorBoundary>
                        </Grid>

                        {/* Line Chart section  */}
                        <Grid item lg={6} xs={12}>
                            <ErrorBoundary>
                                <LineChart />
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