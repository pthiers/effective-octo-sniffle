/* @flow */
import * as React from 'react';

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";

function TestComponent(props: TestComponentProps) {
  return <div
      data-testid="test-component"
      className={`test-component test-component-${props.theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Hola Mundo</h2>
  </div>;
};

export default TestComponent;
