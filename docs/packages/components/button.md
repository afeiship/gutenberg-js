# button

```js
import { Button } from '@wordpress/components';

class App extends React.Component {
  state = {
    value: 'left'
  };

  _onChange = (inEvent) => {
    this.setState({ value: inEvent });
  };

  render() {
    return (
      <div className="demo">
        <Button isPrimary>TEST</Button>
        <Button isLarge>TEST</Button>
        <Button isBusy>TEST</Button>
        <Button isLink>TEST</Button>
      </div>
    );
  }
}
```
