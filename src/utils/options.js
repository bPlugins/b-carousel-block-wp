import { __ } from '@wordpress/i18n';

import { defaultIcon } from './icons';

export const layouts = [
	{ label: __('Default', 'b-carousel-block'), value: 'default', icon: defaultIcon }
];

export const actions = [
	{ value: 'none', label: __('None', 'b-carousel-block') },
	{ value: 'link', label: __('Link', 'b-carousel-block') }
];

export const imgWidths = [
	{ value: '0px', label: __('Auto', 'b-carousel-block') },
	{ value: '100%', label: __('Full', 'b-carousel-block') }
];
export const linkOns = [
	{ value: 'image', label: __('Image', 'b-carousel-block') },
	{ value: 'caption', label: __('Caption', 'b-carousel-block') }
];

export const effects = [
	{ label: __('Slide', 'b-carousel-block'), value: 'slide' },
	{ label: __('Fade', 'b-carousel-block'), value: 'fade' },
	{ label: __('Creative', 'b-carousel-block'), value: 'creative' }
];
export const capDisplays = [
	{ label: __('None', 'b-carousel-block'), value: 'none' },
	{ label: __('Normal', 'b-carousel-block'), value: 'normal' },
	{ label: __('Hover', 'b-carousel-block'), value: 'hover' }
];
export const capPositions = [
	{ label: __('On Image', 'b-carousel-block'), value: 'onImage' },
	{ label: __('Bellow Image', 'b-carousel-block'), value: 'bellowImage' }
];
export const verticalPositions = [
	{ label: __('Top', 'b-carousel-block'), value: 'top' },
	{ label: __('Center', 'b-carousel-block'), value: 'center' },
	{ label: __('Bottom', 'b-carousel-block'), value: 'bottom' }
];
export const aligns = [
	{ label: __('Left', 'b-carousel-block'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('Center', 'b-carousel-block'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('Right', 'b-carousel-block'), value: 'right', icon: 'editor-alignright' }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'b-carousel-block') },
	{ name: 'options', title: __('Options', 'b-carousel-block') },
	{ name: 'style', title: __('Style', 'b-carousel-block') }
];