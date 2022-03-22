import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    const {
        name, password, repeatPassword, email,
        onChange, reset, isValidEmail
    } = useForm({
        name:'',
        email:'',
        password:'',
        repeatPassword:''
    });
    
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>RegisterPAge</h1>
            <form onSubmit={onSubmit}>
                <input
                    type={'text'}
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0  && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input
                    type={'email'}
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Este campo es necesario</span>}

                <input
                    type={'password'}
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                {password.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}

                <input
                    type={'password'}
                    placeholder='Repeat password'
                    name='repeatPassword'
                    value={repeatPassword}
                    onChange={onChange}
                />
                {repeatPassword.trim().length <= 0 && <span>Este campo es necesario</span>}
                {repeatPassword.trim().length > 0 && repeatPassword !== password && <span>Las contrseñas tiene que ser iguales</span>}

                <button type="submit">
                    Create
                </button>
                <button type='button' onClick={reset}>
                    Reset
                </button>
            </form>
        </div>
    )
}
