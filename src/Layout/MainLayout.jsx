import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayout;