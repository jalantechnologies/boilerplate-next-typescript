import React from 'react';
import { useTranslation } from 'next-i18next';

type AboutProps = {
  heading: string;
  about_para1: string;
  storybook: string;
  about_para2: string;
  readme: string;
};

const AboutComponent: React.FC<AboutProps> = ({
  heading,
  about_para1,
  about_para2,
  storybook,
  readme,
}) => {
  const { t } = useTranslation('common');
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-md-12'>
          {' '}
          <h3 className='abt-heading'> {heading} </h3>
        </div>
        <div className='col-md-12'>
          <p className='sub-head'>
            {about_para1}{' '}
            <p>
              <span>
                <a
                  style={{ color: '#7D7D7D' }}
                  href='https://storybook.js.org/docs/react/get-started/introduction/'>
                  {storybook}
                </a>
              </span>{' '}
              {about_para2}
              <span>
                {' '}
                <a
                  style={{ color: '#7D7D7D' }}
                  href='https://github.com/jalantechnologies/boilerplate-next-typescript#readme'>
                  {readme}
                </a>
              </span>
            </p>{' '}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutComponent;
