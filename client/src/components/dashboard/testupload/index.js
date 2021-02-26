import React, { useDebugValue } from 'react';
import AdminLayout from '../../../hoc/adminLayout';
import {Form,Button} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const TestUpload = () => {

    const formik = useFormik({
        initialValues:{archivo:''},
        validationSchema: Yup.object({
            archivo: Yup.mixed().required('A file is required')
        }),
        onSubmit:(values)=>{
            /// axios
        }
    })

    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    });

    return(
        <AdminLayout section="Test upload">
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.File
                        id="file"
                        name="file"
                        label="Example file input"
                        onChange={(event)=>{
                            formik.setFieldValue("archivo", event.target.files[0])
                        }}
                    />
                    {
                        formik.errors.archivo && formik.touched.archivo ?
                            <>Error</>
                        :null
                    }
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </AdminLayout>
    )
}

export default TestUpload;