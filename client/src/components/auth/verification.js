import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { accountVerify } from '../../store/actions/users_actions';

import Loader from '../../utils/loader';

import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const iconStyle = {
    fontSize:"200px"
}

const AccountVerify = (props) => {
    const [icon,setIcon] = useState(null);
    const [loading,setLoading] = useState(true);
    const notifications = useSelector( state=> state.notifications);
    const dispatch = useDispatch();

    const query = new URLSearchParams(props.location.search);
    const token = query.get('t');

    useEffect(()=>{
        if(token){
            dispatch(accountVerify(token))
        } else {
            props.history.push('/')
        }
    },[dispatch])


    useEffect(()=>{
        if(notifications && notifications.error){
            setIcon(<SentimentDissatisfiedIcon style={iconStyle}/>)
            setLoading(false)
        }
        if(notifications && notifications.success){
            setIcon(<FavoriteIcon style={iconStyle}/>)
            setLoading(false)
        }
    },[notifications])


    return(
        <>
            { loading ?
                <Loader/>
            :
                <div style={{textAlign:'center'}}>
                    {icon}
                </div>
            }
        </>
    )
}

export default AccountVerify;