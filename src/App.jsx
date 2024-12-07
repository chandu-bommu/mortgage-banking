import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
import LoginForm from './components/LoginForm/LoginForm';
import Accounts from './pages/Accounts';
import Transfer from './pages/Transfer';
import MainLayout from './layout/main';

const App = () => (
    <Router>
        <MainLayout>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/my/accounts" element={<Accounts />} />
                <Route path="/my/accounts/transfer" element={<Transfer />} />
            </Routes>
        </MainLayout>
    </Router>
);

export default App;
