import React from 'react';

import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            {/* <Header /> */}
            <Navigation />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
