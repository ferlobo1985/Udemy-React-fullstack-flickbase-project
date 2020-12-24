import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SideDrawer from './sideNavigation';

const Header = (props) => {

    return(
        <>  
            <nav className="navbar fixed-top">
                <Link style={{fontFamily:'Fredoka One'}} to="/"
                    className="navbar-brand d-flex align-items-center"
                >
                    FlickBase
                </Link>
                <SideDrawer/>
            </nav>
        </>
    )
}

export default withRouter(Header);