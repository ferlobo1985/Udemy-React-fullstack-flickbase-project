import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import EmailStepper from './stepper/mail'

import {
    Grid,
    TextField,
    Divider
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const AuthProfile = () => {
    const [emailModal,setEmailModal] = useState(false);
    const users = useSelector(state => state.users);
    const notifications = useSelector(state => state.notifications);

    const closeModal = () => setEmailModal(false);
    const openModal = () => setEmailModal(true);

    useEffect(()=>{
        if(notifications && notifications.success){
            closeModal()
        }
    },[notifications])

    return(
        <div>
            <div className="mb-3 auth_grid">
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField value={users.data.email} disabled/>
                    </Grid>
                    <Grid item>
                        <EditIcon color="primary" onClick={openModal}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <TextField value="**********" disabled/>
                    </Grid>
                    <Grid item>
                        <EditIcon color="primary"/>
                    </Grid>
                </Grid>
            </div>
            <Divider/>

            {/* email modal */}
            <Modal size="lg" centered show={emailModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EmailStepper user={users}/>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default AuthProfile;