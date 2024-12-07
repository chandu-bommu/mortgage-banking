import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import AccountSummary from './components/AccountSummary/AccountSummary';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Summary" element={<AccountSummary />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;