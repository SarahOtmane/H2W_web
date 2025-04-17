import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import ConditionsGenerales from './pages/ConditionsGenerales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialité';
import EngagementAccessibilite from './pages/EngagementAccessibilite';
import LandingPage from './pages/LandingPage';
import TableauBord from './pages/student/TableauBord';
import Portfolio from './pages/student/Portfolio';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';

const AppContent: React.FC = () => {
    const location = useLocation();

    const renderHeader = () => {
        if (location.pathname === '/landing-page') {
            return null; 
        }
        const whiteBackgroundPaths = ['/error-404', '/error-500'];
        const isWhiteBackground = whiteBackgroundPaths.includes(location.pathname);
        return isWhiteBackground ? <Header style="white" /> : <Header />;
    };

    return (
        <>
            {renderHeader()}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/landing-page' element={<LandingPage />} />
                <Route path='/conditions-generales' element={<ConditionsGenerales />} />
                <Route path='/politique-confidentialite' element={<PolitiqueConfidentialite />} />
                <Route path='/engagement-accessibilite' element={<EngagementAccessibilite />} />

                <Route path="error-404" element={<Error404 />} />
                <Route path="error-500" element={<Error500 />} />

                <Route path='etudiant'>
                    <Route path='tableau-de-bord' element={<TableauBord />} />
                    <Route path='portfolio' element={<Portfolio />} />
                </Route>
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