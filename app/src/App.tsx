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

const AppContent: React.FC = () => {
    const location = useLocation();

    const renderHeader = () => {
        if (location.pathname === '/landing-page') {
            return null; 
        }
        return <Header />; 
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

                <Route path='etudiant'>
                    <Route path='tableau-de-bord' element={<TableauBord />} />
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