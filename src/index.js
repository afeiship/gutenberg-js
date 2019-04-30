/**
 * WordPress dependencies
 */

import './scripts/api-fetch';
import './scripts/data';

import '@wordpress/hooks';
import '@wordpress/url';
import '@wordpress/api-fetch';
import '@wordpress/autop';
import '@wordpress/blob';
import '@wordpress/block-serialization-default-parser';
import '@wordpress/escape-html';
import '@wordpress/element';
import '@wordpress/is-shallow-equal';
import '@wordpress/compose';
import '@wordpress/dom';
import '@wordpress/html-entities';
import '@wordpress/shortcode';
import '@wordpress/blocks';
import '@wordpress/keycodes';
import '@wordpress/rich-text';
import '@wordpress/components';
import '@wordpress/core-data';
import '@wordpress/date';
import '@wordpress/notices';
import '@wordpress/nux';
import '@wordpress/token-list';
import '@wordpress/viewport';
import '@wordpress/wordcount';
import '@wordpress/block-library';
import '@wordpress/plugins';
import '@wordpress/format-library';
import '@wordpress/a11y';
import { AlignmentToolbar } from '@wordpress/block-editor';

import React from 'react';
import ReactDOM from 'react-dom';

// Style
import './styles/style.scss';

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

ReactDOM.render(<App />, document.getElementById('app'));
