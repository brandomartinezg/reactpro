import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, Myselect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>
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
                        <MyTextInput 
                            label='First name' 
                            name='firstName'
                            placeholder='First name'
                        />

                        <MyTextInput 
                            label='Last name' 
                            name='lastName'
                            placeholder='Last name'
                        />

                        <MyTextInput 
                            label='Email address' 
                            name='email'
                            placeholder='Email address'
                            type='email'
                        />
                        
                        <Myselect label='Job Type' name='jobType' as='select'>
                            <option value={''}>Pick something</option>
                            <option value={'developer'}>developer</option>
                            <option value={'designer'}>designer</option>
                            <option value={'it-sr'}>it sr</option>
                            <option value={'it-jr'}>it jr</option>
                        </Myselect>


                        <MyCheckbox label={'Terms and conditions'} name='terms'/>


                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
