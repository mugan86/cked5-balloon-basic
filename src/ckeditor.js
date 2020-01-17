/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonBlockEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar.js';

export default class Editor extends BalloonBlockEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Underline,
	Link,
	Italic,
	Heading,
	Essentials,
	Paragraph,
	BlockToolbar
];

// Editor configuration.
Editor.defaultConfig = {		
	toolbar: {
		items: [
			'bold',
			'italic',
			'link'
		]
	},
	language: 'es',
	blockToolbar: [
		'heading',
		'underline'
	]
} ;

