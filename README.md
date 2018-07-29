<a href="https://reactjs.org/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" align="right"  width="120" />
</a>

# Secure Functional React - Type Driven Development with TypeScript

[![Build Status](https://travis-ci.org/flandrade/functional-react-typescript.svg?branch=master)](https://travis-ci.org/flandrade/functional-react-typescript)

> A strong type system can not only prevent errors, but also guide you and
provide feedback in your design process.

Mark Seemann.

Writing your program around types makes it easy for the type checker to catch
logic errors. In this repository, you can find some functional React's patterns
with TypeScript.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Secure Functional React - Type Driven Development with TypeScript](#secure-functional-react---type-driven-development-with-typescript)
  - [Patterns](#patterns)
    - [High-Order Components (HOC)](#high-order-components-hoc)
    - [Functional State](#functional-state)
    - [Events](#events)
  - [Stack](#stack)
  - [Getting Started](#getting-started)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Patterns

### High-Order Components (HOC)

They are high order functions that accept a React component and return a new
React component.

```ts
const NewComponent = highOrderComponent(BaseComponent)
```

#### withProps

The new component is merged with the original props. It takes a `Props` object
and returns a new component with these `Props`:

```ts
type WithProps
  = (newProps: object) => (WrappedComponent: React.ComponentType) => React.ComponentType;
```

Therefore, you can use it as here:

```ts
const Display: React.ComponentType = withProps({ score })(CounterDisplay);
```

You will find the example in:

```
/src/containers/Page.tsx
/src/utils/withProps.tsx
```

For more examples and HOCs, you can take a look at [recompose](https://github.com/acdlite/recompose).

### Functional State

 Instead of passing in an object , we can pass in a function to `setState` and get the new state. According to TypeScript's definitions:

```ts
setState<K extends keyof S>(
  state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null), callback?: () => void
): void;
```

In your component class, your handler will use `setState`, which receives a
function an updated function:

```ts
onIncrementHandler = () => {
  this.setState(increment);
}
```

Therefore, the updater will be fully decoupled from the component, which makes
testing easy:

```ts
function increment(state: State): State {
  return {
    score: state.score + 1
  };
}
```

You will find the example in:

```
/src/containers/Page.tsx
/src/helpers/update.ts
```

### Events
Handling events with React elements can be a challenge if you deal with several
events. React's Types can provide type safety:

In general, `button` components should handle `onClick` events. You can ensure
type safety by declaring the event, but also the source of this:

```ts
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
```

Therefore, you can declare a handler like this:

```ts
onIncrementHandler = (_e: React.MouseEvent<HTMLButtonElement>) => {
  this.setState(increment);
}
```

If you try to assign a `onClick` from a input element, it will fail:

```tsx
<Input onClick={this.onIncrementHandler}/>
```

```
Types of property 'onClick' are incompatible.
  Type '(_e: MouseEvent<HTMLButtonElement>) => void' is not assignable to type '(event: MouseEvent<HTMLInputElement>) => void'.
```

Unless you create a sum type to enable this:

```ts
type IncrementHandler
  = React.MouseEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLInputElement>;
```

It is clear that you can not only enforce the event type, but also the source
of this event, which adds safety to your interfaces.

You will find the example in:

```
/src/containers/Page.tsx
/src/components/Button.tsx
```

## Stack

This project uses the following stack:

- TypeScript 2.9
- Webpack 4.0
- tslint
- Jest
- Enzyme

## Getting Started

1. Install depedencies

```
npm install
```

2. Compile the project

```
npm run build
```

3. Open the file

```
public/index.html
```

4. To run tests

```
npm test
```
