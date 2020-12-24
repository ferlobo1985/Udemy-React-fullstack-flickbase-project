import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

const AdminLayout = (props) => {
    const users = useSelector(state=> state.users);
    return(
        <>
            <div className="row adminLayout">
                <nav className="col-md-2 d-none d-md-block sidebar">
                    <div>
                        <List>
                            <ListItem button component={RouterLink} to="/dashboard">
                                <ListItemText primary="Dashboard"/>
                            </ListItem>
                            <ListItem button component={RouterLink} to="/dashboard/profile">
                                <ListItemText primary="Profile"/>
                            </ListItem>
                            { users.data.role === 'admin' ?
                                <ListItem button component={RouterLink} to="/dashboard/articles">
                                    <ListItemText primary="Articles"/>
                                </ListItem>
                            :null
                            }
                           
                        </List>
                    </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 className="h2">{props.section}</h1>
                    </div>
                        {props.children}
                </main>
            </div>
        </>
    )
}

export default AdminLayout;