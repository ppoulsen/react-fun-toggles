import React from 'react';

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from '@storybook/react';

import SmileyToggle from '../src/SmileyToggle';

interface IControlledToggleState {
  checked: boolean;
}

class ControlledToggle extends React.PureComponent<
  any,
  IControlledToggleState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      checked: true,
    };
  }
  public render() {
    return (
      <SmileyToggle onChange={this.onChange} checked={this.state.checked} />
    );
  }

  private onChange = (next: boolean) => this.setState({ checked: next });
}

storiesOf('Button', module)
  .add('uncontrolled', () => <SmileyToggle defaultChecked={true} />)
  .add('controlled', () => <ControlledToggle />);
