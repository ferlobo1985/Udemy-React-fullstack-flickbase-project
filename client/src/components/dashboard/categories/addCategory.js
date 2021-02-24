import React from 'react';
import { useDispatch } from 'react-redux'
import { addCategory } from '../../../store/actions/article_actions';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    TextField,
    Button
} from "@material-ui/core"

const AddCategories = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {name:''},
        validationSchema: Yup.object({
            name:Yup.string()
            .required('The name is required')
        }),
        onSubmit:(values, { resetForm })=>{
            dispatch(addCategory(values))
            resetForm();
        }
    })

    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    });

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <TextField
                        style={{width:'100%'}}
                        name="name"
                        label="Enter a name"
                        variant="outlined"
                        {...formik.getFieldProps('name')}
                        {...errorHelper(formik,'name')}
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Add category
                </Button>

            </form>
        </>
    )

}

export default  AddCategories