import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

const AppContent: React.FC = () => {
    const location = useLocation();

    const renderHeader = () => {
        if (location.pathname === '/') {
            return null; 
        }
        return <Header />; 
    };

    return (
        <>
            {renderHeader()}
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
            <Footer />
        </>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;