import React from 'react';

import { getStyles, IGetStylesOptions } from './styles';

interface ISmileyToggleProps {
  checked?: boolean;
  checkedColor?: string;
  defaultChecked?: boolean;
  height?: number;
  onChange?: (checked: boolean) => void;
  uncheckedColor?: string;
}

let counter = 0;
export default class SmileyToggle extends React.PureComponent<
  ISmileyToggleProps
> {
  public static defaultProps = {
    height: 30,
  };

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

    const styles = this.getStyles();

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

  private getStyles = () => {
    const options: IGetStylesOptions = {};
    if (this.props.hasOwnProperty('height')) {
      options.height = this.props.height;
    }
    if (this.props.hasOwnProperty('checkedColor')) {
      options.checkedColor = this.props.checkedColor;
    }
    if (this.props.hasOwnProperty('uncheckedColor')) {
      options.uncheckedColor = this.props.uncheckedColor;
    }
    return getStyles(options);
  };

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
