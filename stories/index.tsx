import React from 'react';

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from '@storybook/react';

import SmileyToggle from '../src/SmileyToggle';

storiesOf('Button', module).add('with text', () => <SmileyToggle />);
