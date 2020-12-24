import React,{ useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideDrawer from './sideNavigation';

import { useSelector } from 'react-redux';
import { showToast } from '../../utils/tools';

const Header = (props) => {
    const notifications = useSelector(state => state.notifications)


    useEffect(()=>{
        if(notifications && notifications.error){
            const msg = notifications.msg ? notifications.msg : 'Error';
            showToast('ERROR',msg);
        }
        if(notifications && notifications.success){
            const msg = notifications.msg ? notifications.msg : 'Error';
            showToast('SUCCESS',msg);
        }
    },[notifications])


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