import * as React from 'react';
import { Button } from 'baseui/button';

type ButtonProps = {
  intext: string;
  disabled: boolean;
};

const ButtonInput: React.FC<ButtonProps> = ({ intext, disabled }) => {
  return <Button>{intext}</Button>;
};

export default ButtonInput;
