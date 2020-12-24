import React from 'react';

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

const SideDrawer = () => {
    return(
        <>
            <DehazeIcon
                className="drawer_btn"
                onClick={()=> alert('open')}
            />
            <Drawer anchor={'right'} open={true} onClose={()=> alert('close')}>

                <form style={{margin:'20px'}}>
                    <TextField id="outlined-basic" label="Search movie"
                    variant="outlined"
                    />
                </form>



            </Drawer>
        </>
    )
}

export default SideDrawer;
