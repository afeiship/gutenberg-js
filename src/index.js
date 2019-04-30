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

import * as i18n from '@wordpress/i18n';
import * as data from '@wordpress/data';
import * as editPost from '@wordpress/edit-post';
import { removeFilter } from '@wordpress/hooks';
import React from 'react';
import ReactDOM from 'react-dom';

// Style
import './styles/style.scss';

class App extends React.Component {
  componentDidMount() {
    const settings = {
      alignWide: true,
      availableTemplates: [],
      allowedBlockTypes: true,
      disableCustomColors: false,
      disablePostFormats: false,
      titlePlaceholder: 'Add title',
      bodyPlaceholder: 'Insert your custom block',
      isRTL: false,
      autosaveInterval: 10,
      postLock: {
        isLocked: false
      },
      canPublish: false,
      canSave: false,
      canAutosave: false,
      mediaLibrary: true
    };

    localStorage.removeItem('g-editor-page');
    data.dispatch('core/nux').disableTips();

    console.log(
      i18n.__('hello fei')
    );

    // fix: remove upload image error:
    removeFilter(
      'editor.MediaUpload',
      'core/edit-post/components/media-upload/replace-media-upload'
    );

    // init editor:
    editPost.initializeEditor('editor', 'page', 1, settings, {});
  }

  render() {
    return <div id="editor" className="gutenberg__editor" />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
