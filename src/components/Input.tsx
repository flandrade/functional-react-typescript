import * as React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  onKeyboard: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input = ({
  onClick: handleClick,
  onKeyboard: onKeyboard,
  children
}: Props) => (
  <input onClick={handleClick} onKeyPress={onKeyboard}>{children}</input>
);

export default Input;
