import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { alpha, useTheme } from '@mui/material/styles';
import ErrorBoundary from './ErrorBoundary';
import { Skeleton } from '@mui/material';

const DashboardHeader = () => {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <ErrorBoundary>
      <Grid
        item
        alignItems='center'
        justifyContent='space-between'
        container
        spacing={3}
        xs={12}
        style={{ marginTop: '-30px' }}
      >
        <Grid item>
          <Typography color={theme.palette.text.primary} variant='h2'>
            {
              loading ? (<Skeleton variant='h2' width={70} />)
                : (`Overview`)
            }
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Typography color={theme.palette.text.secondary} variant='h5'>
              {loading ? ( <Skeleton variant='text' width={70} />
                ) : ( 
                <>
                  <span>{'Welcome:'}</span>{' '}
                  <span
                    style={{
                      color:
                        theme.palette.mode === 'dark'
                          ? green[500]
                          : theme.palette.success.dark,
                      background:
                        theme.palette.mode === 'dark'
                          ? alpha(green[500], 0.1)
                          : alpha(green[500], 0.2),
                      padding: '5px',
                      borderRadius: '5px',
                      marginRight: '20px',
                    }}
                  >
                    {new Date().toLocaleDateString('en-GB', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </>
              )}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default DashboardHeader;