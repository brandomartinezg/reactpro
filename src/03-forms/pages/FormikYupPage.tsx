import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const { 
        handleSubmit, 
        errors, touched, getFieldProps
    } = useFormik({
        initialValues:{
            firstName: '',
            lastName:'',
            email:''
        },
        onSubmit: values => {
            console.log(values);
        }, 
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Should be 15 characteres or less')
                .required('Is required'),
            lastName: Yup.string()
                .max(10, 'Should be 10 characters or less')
                .required('Is required'),
            email: Yup.string()
                .email('Should be an email')
                .required('Is required')
        })
    });
  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor='firstName'>First name</label>
            <input type={'text'} {...getFieldProps('firstName')} />
            {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
            <label htmlFor='lastname'>Last name</label>
            <input type={'text'} {...getFieldProps('lastName')} />
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
            <label htmlFor='email'>Email address</label>
            <input type={'text'} {...getFieldProps('email')} />
            {touched.email && errors.email && <span>{errors.email}</span>}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
