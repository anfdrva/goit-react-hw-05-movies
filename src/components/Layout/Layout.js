//const { Link } = require("react-router-dom")

import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, HeaderLink, HeaderNav } from './Layout.styled';


const Layout = () => {
    return (
        <div>
            <Header>
                <HeaderNav>
                    <HeaderLink to='/'>Home</HeaderLink>
                    <HeaderLink to='/movies'>Movies</HeaderLink>
                </HeaderNav>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default Layout;