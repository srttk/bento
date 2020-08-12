import React from 'react'
import Link from 'next/link'

const Navink = ({ href, children , ...rest}) => (
<Link href={href} {...rest}><a className="main__nav--link">{children}</a></Link>
)

const MainNav = () => {
    return (
        <nav className="main__nav">
            <Navink href="/">Home</Navink>
            <Navink href="/about">About</Navink>
            <Navink href="/nowhere">404</Navink>
        </nav>
    );
}

export default MainNav;
