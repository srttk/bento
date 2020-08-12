import React from 'react';
import Banner from '@/components/Banner'
import MainNav from './MainNav'
const Layout: React.FC<{ title : string | null}> = ({ children }) => {
    return (
        <div className="layout__wrapper">
            <header className="flex items-center">
                <Banner title="Bento"/>
                <MainNav/>
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
