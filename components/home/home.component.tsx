import * as React from 'react';
import {
  Formik,
  Form,
  FormikProps,
  FormikHelpers as FormikActions,
} from 'formik';
import * as Yup from 'yup';
import { Input } from '@components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ButtonInput } from '@components';
type Values = {
  email: string;
  password: string;
};

const HomeComponent: React.FC<Values> = ({ email, password }) => {
  const { t } = useTranslation('common');
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
            <br />
            <div>
              <ButtonInput
                intext='LogIn'
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
