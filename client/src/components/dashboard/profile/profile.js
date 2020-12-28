import React from 'react';
import { useFormik } from 'formik'; 
import {useDispatch,useSelector} from 'react-redux';
import { updateUserProfile } from '../../../store/actions/users_actions';

import {
    TextField,
    Divider,
    Button
} from '@material-ui/core'


const UserProfile = () => {
    const { firstname, lastname, age } = useSelector(state=>state.users.data)
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { firstname, lastname, age},
        onSubmit:(values,{resetForm})=>{
           dispatch(updateUserProfile(values))
        }
    });

    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    });

    return(
       <>
            <form className="mt-3 article_form" style={{maxWidth:'250px'}} onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <TextField
                        style={{width:'100%'}}
                        name="firstname"
                        label="Enter your firstname"
                        variant="outlined"
                        {...formik.getFieldProps('firstname')}
                        {...errorHelper(formik,'firstname')}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        style={{width:'100%'}}
                        name="lastname"
                        label="Enter your lastname"
                        variant="outlined"
                        {...formik.getFieldProps('lastname')}
                        {...errorHelper(formik,'lastname')}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        style={{width:'100%'}}
                        name="age"
                        label="Enter your age"
                        variant="outlined"
                        {...formik.getFieldProps('age')}
                        {...errorHelper(formik,'age')}
                    />
                </div>
                <Button 
                    className="mb-3" 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                >
                   Edit profile
                </Button>
            </form>   
       </>
    )
}

export default UserProfile;