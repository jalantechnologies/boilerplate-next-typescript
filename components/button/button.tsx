import * as React from 'react';
import { Button, KIND, SHAPE } from 'baseui/button';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../../styletron';

type ButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonInput: React.FC<ButtonProps> = ({ text, disabled, onClick }) => {
  return (
    <StyletronProvider value={styletron}>
      <Button onClick={onClick} kind={KIND.secondary} shape={SHAPE.pill}>
        {text}
      </Button>
    </StyletronProvider>
  );
};

export default ButtonInput;
