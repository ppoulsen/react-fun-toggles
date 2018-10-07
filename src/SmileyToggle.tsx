import React from 'react';

import * as styles from './styles';

interface ISmileyToggleProps {
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

let counter = 0;
export default class SmileyToggle extends React.PureComponent<
  ISmileyToggleProps,
  any,
  any
> {
  public static defaultProps = {
    checked: false,
  };

  public id: string;

  constructor(props: ISmileyToggleProps, context?: any) {
    super(props, context);
    this.id = 'toggle' + counter;
    counter++;
  }

  public render() {
    return (
      <div className={styles.toggle} onClick={this.props.onClick}>
        <input id={this.id} type="checkbox" className={styles.toggleCheckBox} />
        <label className={styles.toggleBtn} htmlFor={this.id}>
          <span className={styles.toggleFeature} />
        </label>
      </div>
    );
  }
}
