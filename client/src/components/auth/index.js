import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch , useSelector } from 'react-redux';
import { registerUser, signInUser} from '../../store/actions/users_actions';
import { TextField, Button } from '@material-ui/core';
import PreventAuthRoute from '../../hoc/preventAuthRoute';


const Auth = (props) => {
    const [register, setRegister ] = useState(false);
    const notifications = useSelector( state => state.notifications)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{ email:'francis@gmail.com',password:'testing123'},
        validationSchema:Yup.object({
            email:Yup.string()
            .required('Sorry the email is required')
            .email('This is not a valid email'),
            password:Yup.string()
            .required('Sorry the password is required')
        }),
        onSubmit:(values,{resetForm})=>{
            handleSubmit(values)
        }
    });

    const handleSubmit = (values) => {
        if(register){
            dispatch(registerUser(values))
        }else {
            dispatch(signInUser(values))
        }
    }


    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    });

    useEffect(()=>{
        if(notifications && notifications.success){
            props.history.push('/dashboard')
        }
    },[notifications,props.history])


    return(
        <PreventAuthRoute>
            <div className="auth_container">
                <h1>Authenticate</h1>
                <form className="mt-3" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <TextField
                            style={{width:'100%'}}
                            name="email"
                            label="Enter your email"
                            variant="outlined"
                            {...formik.getFieldProps('email')}
                            {...errorHelper(formik,'email')}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            style={{width:'100%'}}
                            name="password"
                            label="Enter your password"
                            type="password"
                            variant="outlined"
                            {...formik.getFieldProps('password')}
                            {...errorHelper(formik,'password')}
                        />
                    </div>
                    <Button variant="contained" color="primary" type="submit" size="large">
                        {register ? 'Register':'Login'}
                    </Button>
                    <Button 
                        className="mt-3"
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        onClick={()=> setRegister(!register)}
                    >
                        Want to {!register ? 'Register':'Login'} ?
                    </Button>

                </form>

            </div>
        </PreventAuthRoute>
    )
}

export default Auth;