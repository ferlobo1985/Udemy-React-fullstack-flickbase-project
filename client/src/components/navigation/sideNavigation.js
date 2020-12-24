import React,{ useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField
} from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DashboardIcon from '@material-ui/icons/Dashboard';

const SideDrawer = ({users,signOutUser}) => {
    const [state,setState] = useState(false);

    return(
        <>
            <DehazeIcon
                className="drawer_btn"
                onClick={()=> setState(true)}
            />
            <Drawer anchor={'right'} open={state} onClose={()=> setState(false)}>

                <form style={{margin:'20px'}}>
                    <TextField id="outlined-basic" label="Search movie"
                    variant="outlined"
                    />
                </form>
                <Divider/>
                <List>
                    <ListItem button component={RouterLink} to="/" onClick={()=>setState(false)}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button component={RouterLink} to="/contact" onClick={()=>setState(false)}>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText primary="Contact"/>
                    </ListItem>


                    { !users.auth ?
                        <ListItem button component={RouterLink} to="/auth" onClick={()=>setState(false)}>
                            <ListItemIcon><VpnKeyIcon/></ListItemIcon>
                            <ListItemText primary="Sign in"/>
                        </ListItem>
                    : 
                        <ListItem button onClick={()=> { 
                            signOutUser()
                            setState(false)
                        }}>
                            <ListItemIcon><VpnKeyIcon/></ListItemIcon>
                            <ListItemText primary="Sign out"/>
                        </ListItem>
                    }
                    
                    
                </List>
                { users.auth ?
                    <>
                        <Divider/>
                        <List>
                            <ListItem button component={RouterLink} to="/dashboard" onClick={()=>setState(false)}>
                                <ListItemIcon><DashboardIcon/></ListItemIcon>
                                <ListItemText primary="Dashboard"/>
                            </ListItem>
                        </List>
                    </>
                :null}
            </Drawer>
        </>
    )
}

export default SideDrawer;
