import * as users from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';


export const registerUser = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/users/register`,{
                email: values.email,
                password: values.password
            });

            dispatch(users.authUser({data: user.data, auth: true }))
            dispatch(users.successGlobal('Welcome !!.Check you email and validate your account'))
        } catch(error){
            dispatch(users.errorGlobal(error.response.data.message))
        }
    }
}


export const signInUser = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/users/signin`,{
                email: values.email,
                password: values.password
            });

            dispatch(users.authUser({data: user.data, auth: true }))
            dispatch(users.successGlobal('Welcome !!'))
        } catch(error){
            dispatch(users.errorGlobal(error.response.data.message))
        }
    }
}