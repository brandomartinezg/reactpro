import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components</h1>
        <Formik
        initialValues={{
                firstName: '',
                lastName:'',
                email:'',
                terms: false,
                jobType: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Should be 15 characteres or less')
                        .required('Is required'),
                    lastName: Yup.string()
                        .max(10, 'Should be 10 characters or less')
                        .required('Is required'),
                    email: Yup.string()
                        .email('Should be an email')
                        .required('Is required'),
                    terms: Yup.boolean().isTrue('Must accept the conditions').required(),
                    jobType: Yup.string().notOneOf(['it-jr'],'This option is not allowed').required('is required')
                })
            }
        >
            {
                (formik) => (
                    <Form>
                        <label htmlFor='firstName'>First name</label>
                        <Field name='firstName' type='text'/>
                        <ErrorMessage name='firstName' component='span'/>
                        
                        <label htmlFor='lastname'>Last name</label>
                        <Field name='lastName' type='text'/>
                        <ErrorMessage name='lastName' component='span'/>

                        <label htmlFor='email'>Email address</label>
                        <Field name='email' type='text'/>
                        <ErrorMessage name='email' component='span'/>

                        <label htmlFor='jobType'>Job Type</label>
                        <Field name='jobType' as='select'>
                            <option value={''}>Pick something</option>
                            <option value={'developer'}>developer</option>
                            <option value={'designer'}>designer</option>
                            <option value={'it-sr'}>it sr</option>
                            <option value={'it-jr'}>it jr</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span'/>

                        <label>
                            <Field name='terms' type='checkbox'/>
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component='span'/>


                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
