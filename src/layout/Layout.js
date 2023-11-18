import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NoSsr from '@mui/material/NoSsr';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import ErrorBoundary from '../components/ErrorBoundary';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isLg ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }
      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <ErrorBoundary>
      <Box
        id="page-top"
        sx={{
          backgroundColor: theme.palette.background.default,
          height: '100%',
          paddingTop: '60px',
        }}
      >
        <ErrorBoundary>
          <Header onSidebarOpen={handleSidebarOpen} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Sidebar onClose={handleSidebarClose} open={open} />
        </ErrorBoundary>
        <Box>{children}</Box>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
        <NoSsr>
          <Zoom in={trigger}>
            <ErrorBoundary>
              <Box
                onClick={() => scrollTo('page-top')}
                role="presentation"
                sx={{ position: 'fixed', bottom: 24, right: 32 }}
              >
                <Fab
                  color="primary"
                  size="small"
                  aria-label="scroll back to top"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                      border: '2px solid' + theme.palette.primary.main,
                    },
                  }}
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </Box>
            </ErrorBoundary>
          </Zoom>
        </NoSsr>
      </Box>
    </ErrorBoundary>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
