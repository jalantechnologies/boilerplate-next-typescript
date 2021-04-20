import * as React from 'react';
import { Button } from 'baseui/button';

type ButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonInput: React.FC<ButtonProps> = ({ text, disabled, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default ButtonInput;
