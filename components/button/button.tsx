import * as React from 'react';
import { Button } from 'baseui/button';

type ButtonProps = {
  intext: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonInput: React.FC<ButtonProps> = ({ intext, disabled, onClick }) => {
  return <Button onClick={onClick}>{intext}</Button>;
};

export default ButtonInput;
