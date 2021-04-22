import * as React from 'react';
import { ButtonInput } from '@components';
import { useRouter } from 'next/router';
const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header id='header'>
      <div className='btn-en'>
        <ButtonInput
          disabled={true}
          text='English'
          onClick={() => router.push('/en')}
        />
      </div>
      <div className='btn-fr'>
        <ButtonInput
          disabled={true}
          text='Francis'
          onClick={() => router.push('/fr')}
        />
      </div>
    </header>
  );
};

export default Header;
