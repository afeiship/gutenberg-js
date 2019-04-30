# alignment-toolbar
> Default value `[left|center|right]`

## usage
```js
import { AlignmentToolbar } from '@wordpress/block-editor';

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
        <AlignmentToolbar value={this.state.value} onChange={this._onChange} />
      </div>
    );
  }
}
```
