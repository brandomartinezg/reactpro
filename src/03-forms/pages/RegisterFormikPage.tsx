
import { Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
    
        
    return (
        <div>
            <h1>Register Formik Page </h1>
            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password:'',
                    repeatPassword:''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                        .min(2,'El nombre debe de tener 2 caracteres')
                        .max(15, 'Deben ser menos de 15')
                        .required('Required'),
                        email: Yup.string().email('Should be an email').required('Required'),
                        password: Yup.string().min(6, 'Minimo 6').required(),
                        repeatPassword: Yup.string().oneOf([Yup.ref('password')],'Las contraseñas no son iguales').required('Requerido')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                label='Nombre'
                                name='name'
                                placeholder='Nombre'
                            />
                            <MyTextInput
                                label='Email'
                                name='email'
                                placeholder='Email'
                                type='email'
                            />
                            <MyTextInput
                                label='Contraseña'
                                name='password'
                                placeholder='Contraseña'
                                type='password'
                            />
                            <MyTextInput
                                label='Repite contraseña'
                                name='repeatPassword'
                                placeholder='Repite contraseña'
                                type='password'
                            />
                            <button type="submit">
                                Create
                            </button>
                            <button type='button' onClick={formik.handleReset}>
                                Reset
                            </button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
