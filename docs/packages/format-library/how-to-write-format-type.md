# default

- bold
- code
- image
- italic
- link
- strikethrough
- underline


## code format
```js
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { toggleFormat } from '@wordpress/rich-text';
import { RichTextShortcut, RichTextToolbarButton } from '@wordpress/block-editor';

const name = 'core/code';
const setttings = {
	name,
	title: __( 'Code' ),
	tagName: 'code',
	className: null,
	edit( { value, onChange, isActive } ) {
		const onToggle = () => onChange( toggleFormat( value, { type: name } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="access"
					character="x"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon="editor-code"
					title={ __( 'Code' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="access"
					shortcutCharacter="x"
				/>
			</Fragment>
		);
	},
};

import {
	registerFormatType,
} from '@wordpress/rich-text';

registerFormatType( name, settings ) )
```