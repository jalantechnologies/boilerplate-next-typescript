import React from 'react';
import { useRouter } from 'next/router';
import { ImageLogo, ButtonInput } from '@components';

type AboutProps = {
  heading: string;
  about_para: string;
};

/**
 * Some documented component
 *
 * @component
 */

const AboutComponent: React.FC<AboutProps> = ({ heading, about_para }) => {
  const router = useRouter();
  const logout = (): void => {
    router.push('/');
  };
  return (
    <React.Fragment>
      <div className='container-box'>
        <ImageLogo src={require('@assets/images/logo.png')} />
        <div>
          <h3>{heading}</h3>
        </div>
        <br />
        <div>
          <ButtonInput onClick={logout} disabled intext='logout' />
        </div>
        <br />
        <div>
          <p>{about_para}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutComponent;
