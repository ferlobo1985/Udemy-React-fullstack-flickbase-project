import React from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import AuthProfile from './auth';

const Profile = () => {
    return(
        <AdminLayout section="Profile">
            <AuthProfile/>
        </AdminLayout>
    )
}

export default Profile;