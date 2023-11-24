import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";


const Wallet = () => {
    return (
        <ErrorBoundary>
            <h1>Wallet Balance</h1>
        </ErrorBoundary>
    );
};

export default Wallet;