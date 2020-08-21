import React from 'react';
import Head from 'next/head'
import Banner from '@/components/Banner'
import MainNav from './MainNav'
const Layout: React.FC<{ title ?: string}> = ({ title, children }) => {
    return (
        <div className="layout__wrapper">
            <Head>
                <title> {title ? title : 'Bento'}</title>
            </Head>
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
