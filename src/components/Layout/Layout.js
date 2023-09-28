//const { Link } = require("react-router-dom")

import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/movies'>Movie</NavLink>
                </nav>
            </header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default Layout;