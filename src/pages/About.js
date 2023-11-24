import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import DashboardHeader from "../components/DashboardHeader";


const About = () => {
    return (
        <ErrorBoundary>
            <DashboardHeader />
            <h1>About page</h1>
        </ErrorBoundary>
    );
};

export default About;