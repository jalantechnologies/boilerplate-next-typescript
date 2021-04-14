import * as React from 'react';
import { withFormik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../input-field/input';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  text?: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    text,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <h3>{text}</h3>
      <div>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />

        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>

      <div>
        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>

      <div>
        <button
          type='submit'
          disabled={
            isSubmitting ||
            !!(errors.email && touched.email) ||
            !!(errors.password && touched.password)
          }>
          Sign In
        </button>
      </div>
    </Form>
  );
};

const HomeComponent = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'), // TODO : agentraghav = localize
    password: Yup.string().required('Password is required'), // TODO : agentraghav = localize
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password);
  },
})(InnerForm);

export default HomeComponent;
