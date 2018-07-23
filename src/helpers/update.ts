import { Resseter, State } from "../types";

export function increment(prevState: State): State {
  return {
    resetText: "",
    score: prevState.score + 1
  };
}

export function reset(prevState: State, props: Resseter): State {
  return {
    resetText: `Previous value was ${prevState.score}`,
    score: props.value
  };
}
