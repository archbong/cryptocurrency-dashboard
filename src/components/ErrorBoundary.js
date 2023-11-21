import { Box, Card, CardContent, CardHeader } from '@mui/material';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card>
          <CardHeader
            title='Error Information'
            subheader='Error Information for easy debugging'
          />
          <CardContent>
            <Box sx={{ height: 400, position: 'relative' }}>
              <h2>Something went wrong</h2>
              <p>{` Please resolve: ${this.state.error.toString()} `}</p>
            </Box>
          </CardContent>
        </Card>
      );
    }

    // If no error, render the children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
