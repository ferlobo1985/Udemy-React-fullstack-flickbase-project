import React,{ useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { changeEmail } from '../../../../store/actions/users_actions';

import {
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel
} from '@material-ui/core'


const EmailStepper = ({user}) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Enter old email','Enter new email','Are you sure ?'];
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize:true,
        initialValues:{email:'',newemail:''},
        validationSchema:Yup.object({
            email:Yup.string()
            .required('This is required')
            .email('This is not a valid email')
            .test('match','Please check your email',(email)=>{
                return email === user.data.email
            }),
            newemail:Yup.string()
            .required('This is required')
            .email('This is not a valid email')
            .test('equal','The emails are the same',(newemail)=>{
                return newemail !== user.data.email
            }),
        }),
        onSubmit:(values, {resetForm})=>{
           dispatch(changeEmail(values))
        }
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1 ) 
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1 ) 
    }

    const nextBtn = () => (
        <Button className="mt-3" variant="contained" color="primary" onClick={handleNext}>
            Next
        </Button>
    )

    const backBtn = () => (
        <Button className="mt-3 ml-2" variant="contained" onClick={handleBack}>
            Back
        </Button>
    )


    const errorHelper = (formik, values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    });



    return(
       <>
            <Stepper activeStep={activeStep}>
            { steps.map((label,index)=>{
                return (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                )
            })}
            </Stepper>
            <form className="mt-3 stepper_form" onSubmit={formik.handleSubmit}>
            { activeStep === 0 ?
                <div className="form-group">
                    <TextField
                        style={{width:'100%'}}
                        name="email"
                        label="Enter your email"
                        variant="outlined"
                        {...formik.getFieldProps('email')}
                        {...errorHelper(formik,'email')}
                    />
                    { formik.values.email && !formik.errors.email ?
                        nextBtn()
                    :null}
                </div>
            :null}
            { activeStep === 1 ?
                <div className="form-group">
                    <TextField
                        style={{width:'100%'}}
                        name="newemail"
                        label="Enter your new email"
                        variant="outlined"
                        {...formik.getFieldProps('newemail')}
                        {...errorHelper(formik,'newemail')}
                    />
                    { formik.values.newemail && !formik.errors.newemail ?
                        nextBtn()
                    :null}
                    { backBtn()}
                </div>
            :null}
            { activeStep === 2 ?
                <div className="form-group">
                    <Button className="mt-3" variant="contained" color="primary" onClick={formik.submitForm}>
                        Yes change my email
                    </Button>
                    { backBtn()}
                </div>
            :null}

            </form>
       </>
    )
}

export default EmailStepper;