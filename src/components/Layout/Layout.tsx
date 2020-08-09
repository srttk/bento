import React from 'react';
import Banner from '@/components/Banner'
const Layout = ({ children }) => {
    return (
        <div className="layout__wrapper">
            <header>
                <Banner title="Bento"/>
            </header>
            <main>
               
                { children }
            </main>
            <footer>
                Bento
            </footer>
        </div>
    );
}

export default Layout;
