import React,{ useState,useEffect,useRef } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validation, formValues } from './validationSchema';

import { 
    TextField, 
    Button, 
    Divider, 
    Chip,
    Paper,
    InputBase,
    IconButton,
    Select,
    MenuItem,
    FormControl,
    FormHelperText
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const AddArticle = (props) => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues:formValues,
        validationSchema:validation,
        onSubmit:(values,{resetForm}) =>{
            console.log(values)
        }
    })


    return(
        <AdminLayout section="Add article">
            add article
        </AdminLayout>
    )
}

export default AddArticle;