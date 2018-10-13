# react-fun-toggles

A collection of React components for toggle and other checkbox inputs. Built in TypeScript with types exported.

![Animated Image of Toggles in Action](https://github.com/ppoulsen/react-fun-toggles/raw/master/.github/smiley-toggle.gif)

## Getting Started

### Installation

```
npm install react-fun-toggles
```

or

```
yarn add react-fun-toggles
```

### Usage

There is one component ready for use, `SmileyToggle`. Import it like so:

```js
import { SmileyToggle } from 'react-fun-toggles';
```

It can be actively controlled by setting the `checked` property:

```ts
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
```

It can also be left uncontrolled, with changes sent through the `onChange` handler:

```ts
<SmileyToggle defaultChecked={true} />
```

The height and colors are also customizable:

```ts
<SmileyToggle height={70} checkedColor="#27986d" uncheckedColor="#c646bd" />
```

## Getting Started (Contributing)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install node >= 6 from https://nodejs.org/en/download/
Install yarn for package management https://yarnpkg.com/en/docs/install

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository

```
git clone https://github.com/ppoulsen/react-fun-toggles.git
```

Install dependencies with `yarn`

```
yarn
```

Run the storybook development server! This will start it on http://localhost:9001

```
yarn storybook
```

## Built With

- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Node.js](https://nodejs.org/en/) - JavaScript Runtime
- [React](https://reactjs.org/) - UI Components
- [yarn](https://yarnpkg.com/en/) - Dependency management
- [TypeStyle](https://typestyle.github.io/#/) - Type safe CSS in JS
- [Storybook](https://storybook.js.org/) - Interactive UI development environment
- [Prettier](https://prettier.io/) - Opinionated code formatter
- [tslint](https://palantir.github.io/tslint/) - Linter for TypeScript

## Credit

- SmileyToggle - Adapted from a toggle in this [codepen](https://codepen.io/ashleynolan/pen/wBppKz) by Ashley Watson-Nolan ([Twitter](https://twitter.com/AshNolan_), [Website](https://ashleynolan.co.uk/), [GitHub](https://github.com/ashleynolan), [CodePen](https://codepen.io/ashleynolan/))

## Authors

- **Paul Poulsen** - _Initial work_ - [ppoulsen](https://github.com/ppoulsen)

See also the list of [contributors](https://github.com/ppoulsen/react-fun-toggles/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
