import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;