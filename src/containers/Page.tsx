import * as React from "react";

import Button from "../components/Button";
import CounterDisplay from "../components/CounterDisplay";
import Input from "../components/Input";
import withProps from "../utils/withProps";

import { increment, reset } from "../helpers/update";
import { State } from "../types";

type IncrementHandler
  = React.MouseEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLInputElement>;

export class Page extends React.Component<{}, State> {
  state: State = {
    resetText: "",
    score: 0
  };

  onIncrementHandler = (_e: IncrementHandler) => {
    this.setState(increment);
  }

  onResetHandler = (_e: React.KeyboardEvent<HTMLInputElement>) => {
    this.setState(reset(this.state, { value: 40000 }));
  }

  render(): JSX.Element {
    const { score }: State = this.state;
    const Display: React.ComponentType = withProps({ score })(CounterDisplay);
    return (
    <div>
      <Display/>
      <Button onClick={this.onIncrementHandler}>Click me!</Button>
      <Input onClick={this.onIncrementHandler} onKeyboard={this.onResetHandler}/>
    </div>
    );
  }
}
