import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl } from '@wordpress/components';
import { produce } from 'immer';

import { Label, InlineDetailMediaUpload } from '../../../../../../bpl-tools/Components';
import { Notice } from '../../../../../../bpl-tools/Components';
import { actions } from '../../../../utils/options';

const ItemSettings = ({ attributes, setAttributes, arrKey, index, setActiveIndex = false }) => {
	const items = attributes[arrKey];
	const { image, action = 'none', link = '', caption } = items[index];

	const updateCarousel = (index, property, val, childProperty = null) => {
		const newItems = produce(attributes[arrKey], draft => {
			if (null !== childProperty) {
				draft[index][property][childProperty] = val;
			} else {
				draft[index][property] = val;
			}
		});

		setAttributes({ [arrKey]: newItems });
		setActiveIndex && setActiveIndex(index);
	}

	return <>
		<Label className='mb5'>{__('Image File:', 'b-carousel-block')}</Label>
		<InlineDetailMediaUpload value={image} onChange={val => updateCarousel(index, 'image', val)} placeholder={__('Enter Image URL', 'b-carousel-block')} />

		<TextControl className='mt20' label={__('Caption:', 'b-carousel-block')} value={caption} onChange={val => updateCarousel(index, 'caption', val)} />

		<SelectControl className='mt20' label={__('Click Action', 'b-carousel-block')} labelPosition='left' value={action} onChange={val => updateCarousel(index, 'action', val)} options={actions} />

		{'link' === action && <TextControl className='mt20' label={__('Link:', 'b-carousel-block')} value={link} onChange={val => updateCarousel(index, 'link', val)} />}

		<Notice status='premium' isIcon={true}>{__('Unlock lightbox click action with Premium version.', 'b-carousel-block')}</Notice>
	</>
}
export default ItemSettings;