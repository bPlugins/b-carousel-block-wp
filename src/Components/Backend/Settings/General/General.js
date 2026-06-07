import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { PanelBody, PanelRow, RangeControl, SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

import { Label, Device, HelpPanel, ItemsPanel, BtnGroup } from '../../../../../../bpl-tools/Components';
import { Notice } from '../../../../../../bpl-tools/Components';
import { pxUnit, perUnit, emUnit, vhUnit, remUnit } from '../../../../../../bpl-tools/utils/options';

import { aligns, capDisplays, imgWidths, linkOns } from '../../../../utils/options';
import ItemSettings from './ItemSettings';

const General = ({ attributes, setAttributes, activeIndex, setActiveIndex, updateOptions, device }) => {
	const { width = {}, height = {}, elements = {}, carouselOptions, image = { width: '100%' }, caption = {} } = attributes;
	const { columns, columnGap } = carouselOptions;
	const { display, textAlign } = caption;

	const panelBodyIF = {
		className: 'bPlPanelBody',
		initialOpen: false
	}

	const itemsProps = { attributes, setAttributes, arrKey: 'carousels', activeIndex, setActiveIndex }

	return <>
		<HelpPanel slug='b-carousel-block' docsLink='https://bplugins.com/docs/b-carousel-block/' />


		<PanelBody className='bPlPanelBody' title={__('Carousel Items', 'b-carousel-block')}>
			<ItemsPanel {...itemsProps} newItem={{
				image: { id: null, url: '', alt: '', title: '' },
				action: 'none',
				link: '',
				caption: ''
			}} ItemSettings={ItemSettings} itemLabel='Carousel' design='sortable' />
		</PanelBody>


		<PanelBody title={__('Layout', 'b-carousel-block')} {...panelBodyIF}>
			<UnitControl label={<PanelRow>
				{__('Width:', 'b-carousel-block')}
				<Device />
			</PanelRow>} value={width[device]} onChange={val => setAttributes({ width: { ...width, [device]: val } })} units={[pxUnit(960), perUnit(100), emUnit(60)]} />

			<UnitControl className='mt20' label={<PanelRow>
				{__('Height:', 'b-carousel-block')}
				<Device />
			</PanelRow>} value={height[device]} onChange={val => setAttributes({ height: { ...height, [device]: val } })} units={[pxUnit(250), vhUnit(30), emUnit(16), remUnit(16)]} />

			<PanelRow className='mt20'>
				<Label className='mb5'>{__('Columns:', 'b-carousel-block')}</Label>
				<Device />
			</PanelRow>
			<RangeControl value={columns[device]} onChange={val => updateOptions('columns', { ...columns, [device]: val })} min={1} max={6} step={1} beforeIcon='grid-view' />

			<Label>{__('Column Gap:', 'b-carousel-block')}</Label>
			<RangeControl value={columnGap} onChange={val => updateOptions('columnGap', val)} min={0} max={250} step={1} beforeIcon='arrow-right-alt' />

			<Notice status='premium' isIcon={true}>{__('Unlock masonry layout with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>


		<PanelBody title={__('Image', 'b-carousel-block')} {...panelBodyIF}>
			<BtnGroup label={__('Width', 'b-carousel-block')} value={image?.width} onChange={val => setAttributes({ image: { ...image, width: val } })} options={imgWidths} />
		</PanelBody>


		<PanelBody title={__('Caption', 'b-carousel-block')} {...panelBodyIF}>
			<SelectControl label={__('Display', 'b-carousel-block')} labelPosition='left' value={display} onChange={val => setAttributes({ caption: { ...caption, display: val } })} options={capDisplays.filter(o => o.value !== 'hover')} />
			<small>{__('Hover view will work only if the caption position is on the image.', 'b-carousel-block')}</small>

			<PanelRow className='mt20'>
				<Label className=''>{__('Text Align:', 'b-carousel-block')}</Label>
				<BtnGroup value={textAlign} onChange={val => setAttributes({ caption: { ...caption, textAlign: val } })} options={aligns} isIcon={true} />
			</PanelRow>

			<Notice status='premium' isIcon={true}>{__('Unlock hover display, below image position, and vertical align with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>


		<PanelBody title={__('Slide Link', 'b-carousel-block')} {...panelBodyIF}>
			<SelectControl label={__('Link On', 'b-carousel-block')} labelPosition='left' value={elements?.linkOn} onChange={val => setAttributes({ elements: { ...elements, linkOn: val } })} options={linkOns.filter(o => o.value !== 'caption')} />

			<Notice status='premium' isIcon={true}>{__('Unlock link on caption with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>
	</>
}
export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase()
	}
})(General);