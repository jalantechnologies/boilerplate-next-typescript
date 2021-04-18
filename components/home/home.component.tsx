import * as React from 'react';
import {
  Formik,
  Form,
  FormikProps,
  FormikHelpers as FormikActions,
} from 'formik';
import * as Yup from 'yup';
import { Input } from '@components';
import { useRouter } from 'next/router';
import { ButtonInput } from '@components';

type Values = {
  email: string;
  password: string;
  email_error: string;
  password_error: string;
};

const HomeComponent: React.FC<Values> = ({
  email,
  password,
  email_error,
  password_error,
}) => {
  const router = useRouter();
  return (
    <div className='container'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(
          values: Values,
          { setStatus, setSubmitting, resetForm }: FormikActions<Values>
        ) => {
          router.push('/about');
          setSubmitting(false);
        }}>
        {({
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          values,
        }: FormikProps<Values>) => (
          <Form>
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
                <div className='text-error'>{email_error}</div>
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
                <div className='text-error'>{password_error}</div>
              )}
            </div>
            <br />
            <div>
              <ButtonInput
                intext='Log In'
                disabled={
                  isSubmitting ||
                  !!(errors.email && touched.email) ||
                  !!(errors.password && touched.password)
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HomeComponent;
