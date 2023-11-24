import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";


const User = () => {
    return (
        <ErrorBoundary>
            <h2>User Profile</h2>
        </ErrorBoundary>
    );
};

export default User;