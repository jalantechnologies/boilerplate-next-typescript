import * as React from 'react';
import { Button } from 'baseui/button';

/**
 * Some documented component
 *
 * @component
 */

type ButtonProps = {
  intext: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonInput: React.FC<ButtonProps> = ({ intext, disabled, onClick }) => {
  return <Button onClick={onClick}>{intext}</Button>;
};

export default ButtonInput;
