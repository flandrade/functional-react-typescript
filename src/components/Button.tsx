import * as React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick: handleClick, children }: Props): JSX.Element => (
  <button onClick={handleClick}>{children}</button>
);

export default Button;
