import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import ConditionsGenerales from './pages/ConditionsGenerales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialité';
import EngagementAccessibilite from './pages/EngagementAccessibilite';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />

                <Route path='/conditions-generales' element={<ConditionsGenerales />} />
                <Route path='/politique-confidentialite' element={<PolitiqueConfidentialite />} />
                <Route path='/engagement-accessibilite' element={<EngagementAccessibilite />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;