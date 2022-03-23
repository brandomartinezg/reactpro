import { Form, Formik } from 'formik';
import { Myselect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: {[key:string]:any } = {};
const requiredFields: {[key:string]: any} ={};
for (const input of formJson) {
    initialValues[input.name] = input.value;

    if( !input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required("Este campo es requerido");
        }
        if(rule.type === "minLength"){
            schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value || 1} caracteres`);
        }
        if(rule.type === "email"){
            schema = schema.email('Debe ser un email');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>

        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={validationSchema}
        >
            {
                (formik) => (
                    <Form noValidate autoComplete='off'>
                        {
                            formJson.map(({type, placeholder, label, name, options}) => {
                                if(type === 'input' || type === 'password' || type === 'email'){
                                    return <MyTextInput 
                                                key={name}
                                                type={(type as any)} 
                                                name={name} 
                                                label={label} 
                                                placeholder={placeholder}
                                            />
                                }else if(type === 'select'){
                                    return(
                                        <Myselect 
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map(({id, description}) => (
                                                    <option key={id} value={id}>{description}</option>
                                                ))
                                            }
                                        </Myselect>
                                    )
                                }
                                throw new Error(`The type ${type} is not supported`);
                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
