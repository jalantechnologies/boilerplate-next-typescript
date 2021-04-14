import * as React from 'react';
import { withFormik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../input-field/input';

type FormValues = {
  email: string;
  password: string;
};

type MyFormProps = {
  initialEmail?: string;
  initialPassword?: string;
};

const InnerForm: React.FC<FormikProps<FormValues>> = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
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
