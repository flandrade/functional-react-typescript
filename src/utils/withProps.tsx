import * as React from "react";

type WithProps
  = (newProps: object) => (WrappedComponent: React.ComponentType) => React.ComponentType;

const withProps: WithProps = (newProps) => (WrappedComponent) => {
  const WithPropsComponent: React.ComponentType = (props: object) =>
    <WrappedComponent {...newProps} {...props} />;

  return WithPropsComponent;
};

export default withProps;
