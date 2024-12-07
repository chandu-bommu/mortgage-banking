import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            {/* <Header /> */}
            {/* <Navigation /> */}
            <main className="content">{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;
