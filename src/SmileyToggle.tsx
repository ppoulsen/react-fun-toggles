import React from 'react';

import * as styles from './styles';

interface ISmileyToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

let counter = 0;
export default class SmileyToggle extends React.PureComponent<
  ISmileyToggleProps
> {
  public id: string;

  constructor(props: ISmileyToggleProps) {
    super(props);
    this.id = 'toggle' + counter;
    counter++;
  }

  public render() {
    const conditionalInputProps: React.InputHTMLAttributes<
      HTMLInputElement
    > = {};
    if (this.isControlledComponent()) {
      conditionalInputProps.checked = this.props.checked;
    } else {
      conditionalInputProps.onChange = this.onChange;
    }
    if (this.props.hasOwnProperty('defaultChecked')) {
      conditionalInputProps.defaultChecked = this.props.defaultChecked;
    }

    return (
      <div className={styles.toggle} onClick={this.onClick}>
        <input
          id={this.id}
          type="checkbox"
          className={styles.toggleCheckBox}
          {...conditionalInputProps}
        />
        <label className={styles.toggleBtn} htmlFor={this.id}>
          <span className={styles.toggleFeature} />
        </label>
      </div>
    );
  }

  private onClick = (e: React.SyntheticEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    // This is triggered by the label and can be ignored as a duplicate
    if (target.tagName === 'INPUT') {
      return;
    }

    if (this.isControlledComponent() && this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  };

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.isControlledComponent() && this.props.onChange) {
      this.props.onChange(e.target.checked);
    }
  };

  private isControlledComponent = () => {
    return this.props.hasOwnProperty('checked');
  };
}
