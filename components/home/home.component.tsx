import * as React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import * as Yup from 'yup';

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
    <Form>
      <h3>{text}</h3>
      <Field
        type='email'
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field
        type='password'
        name='password'
        nChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button
        type='submit'
        disabled={
          isSubmitting ||
          !!(errors.email && touched.email) ||
          !!(errors.password && touched.password)
        }>
        Sign In
      </button>
    </Form>
  );
};

const Home = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password);
  },
})(InnerForm);

export default Home;
