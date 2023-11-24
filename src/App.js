import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme as customTheme } from './theme';
import ColorModeContext from './components/ColorModeContext';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard'
import About from './pages/About';
import Contact from './pages/Contact';
import Wallet from './pages/Wallet';


const App = () => {
    const [mode, setMode] = useState('dark');
    const colorMode = useMemo(
        () => ({
            // The theme mode switch will invoke this method
            toggleColorMode: () => {
                window.localStorage.setItem(
                    'themeMode',
                    mode === 'dark' ? 'light' : 'dark'
                );
                setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
            },
        }),
        [mode]
    );

    useEffect(() => {
        try {
            const localTheme = window.localStorage.getItem('themeMode');
            localTheme ? setMode(localTheme) : setMode('dark');
        } catch {
            setMode('dark');
        }
    }, []);

    return (
        <HelmetProvider>
                <Helmet
                    titleTemplate='%s | Cryptocurrency dashboard'
                    defaultTitle='cryptocurrency dashboard' />
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={customTheme[mode]}>
                        <CssBaseline />
                        <BrowserRouter>
                            <Layout>
                                <Routes>
                                    <Route path='/' element={<Dashboard />} />
                                    <Route path='/about' element={<About />} />
                                    <Route path='/contact' element={<Contact />} />
                                    <Route path='/wallet' element={<Wallet />} />
                                </Routes>
                            </Layout>
                        </BrowserRouter>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </HelmetProvider>
    );
};


export default App;