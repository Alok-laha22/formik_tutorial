import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import Users from './components/users';
import Popup from './components/popup';


const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) 
      : null}
    </>
  )
}

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <>
      <label className='checkbox'>
      <input type="checkbox" {...field} {...props} />
        {children}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) 
      : null}
    </>
  )
}


const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) 
      : null}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Formik
      initialValues={{
        name: '',
        email: '',
        acceptedTerms: false,
        specialPower: ''
      }}

      validationSchema={Yup.object({
        name: Yup.string().min(3, 'Should be atleast 3 characters long')
        .max(15, 'Should not be more than 15 characters').required('Required'),
        email: Yup.string().min(3, 'Should be atleast 3 characters long')
        .max(15, 'Should not be more than 15 characters').required('Required').email('Should be an email'),
        acceptedTerms: Yup.boolean().required().oneOf([true], 'You must accept terms and conditions'),
        specialPower: Yup.string().required().oneOf(['Wealthy','Flight','power of bat guy'], 'Invalid super power')

      })}
      onSubmit={(values, {setSubmitting, resetForm})=> {
        setTimeout(()=>{
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000)
      }}
      >
      {props=> (
        <Form>
            <h1>Sign up</h1>
            <CustomTextInput label="Name" name='name' type="text" placeholder="Alok" />
            <CustomTextInput label="email" type="email" name="email" placeholder="alok@gmail.com" />
            <CustomSelect label="Special Power" name="specialPower">
              <option value="Select a special power">Select a special power</option>
              <option value="Flight">Flight</option>
              <option value="Wealthy">Wealthy</option>
              <option value="Power of a bat guy">Power of a bat guy</option>
            </CustomSelect>
            <CustomCheckbox name="acceptedTerms">
              I accepted the terms and conditions
            </CustomCheckbox>
            <button type="submit" >{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
        </Form>
      )}

      </Formik>

      <Users />
      <Popup />
      
    </div>
  );
}

export default App;
