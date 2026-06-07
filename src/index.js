import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { carouselIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: carouselIcon,

	// Build in Functions
	edit: Edit,

	save: () => null
});