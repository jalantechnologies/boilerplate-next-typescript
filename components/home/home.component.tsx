import * as React from 'react';
import { withFormik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from '@components';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('common');
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

        {touched.email && errors.email && (
          <div className='text-error'>{t('email-error')}</div>
        )}
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
        {touched.password && errors.password && (
          <div className='text-error'>{t('password-error')}</div>
        )}
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
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password);
  },
})(InnerForm);

export default HomeComponent;
