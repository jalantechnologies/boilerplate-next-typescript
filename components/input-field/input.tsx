import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

/**
 * Some documented component
 *
 * @component
 */

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={name}>{label}</label>
      <br />
      <input id={name} {...rest} />
      <br />
    </div>
  );
};

export default Input;
