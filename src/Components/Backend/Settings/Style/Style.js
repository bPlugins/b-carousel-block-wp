import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';

import { Background, ColorControl, ColorsControl, Typography } from '../../../../../../bpl-tools/Components';
import { SpaceControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { pxUnit, perUnit, emUnit } from '../../../../../../bpl-tools/utils/options';

const Style = ({ attributes, setAttributes }) => {
	const { background, padding, isPage, pageSize, pageColor, isPrevNext, prevNextSize, prevNextColor, caption = {} } = attributes;
	const { display, position, typo, colors, overlay, padding: capPadding } = caption;

	const panelBodyIF = {
		className: 'bPlPanelBody',
		initialOpen: false
	}

	return <>
		<PanelBody className='bPlPanelBody' title={__('Carousel', 'b-carousel-block')}>
			<Background label={__('Background:', 'b-carousel-block')} value={background} onChange={val => setAttributes({ background: val })} defaults={{ color: '#0000' }} />

			<SpaceControl className='mt20' label={__('Padding:', 'b-carousel-block')} value={padding} onChange={val => setAttributes({ padding: val })} defaults={{ vertical: '10px', horizontal: '10px' }} />
		</PanelBody>

		{isPage && <PanelBody title={__('Pagination', 'b-carousel-block')} {...panelBodyIF}>
			<UnitControl label={__('Button Size:', 'b-carousel-block')} labelPosition='left' value={pageSize} onChange={val => setAttributes({ pageSize: val })} units={[pxUnit(), perUnit(), emUnit()]} />

			<ColorControl label={__('Button Color:', 'b-carousel-block')} value={pageColor} onChange={val => setAttributes({ pageColor: val })} defaultColor='#146ef5' />
		</PanelBody>}


		{isPrevNext && <PanelBody title={__('Navigation', 'b-carousel-block')} {...panelBodyIF}>
			<UnitControl label={__('Icon Size:', 'b-carousel-block')} labelPosition='left' value={prevNextSize} onChange={val => setAttributes({ prevNextSize: val })} units={[pxUnit(), perUnit(), emUnit()]} />

			<ColorControl label={__('Icon Color:', 'b-carousel-block')} value={prevNextColor} onChange={val => setAttributes({ prevNextColor: val })} defaultColor='#146ef5' />
		</PanelBody>}


		{'none' !== display && <PanelBody title={__('Caption', 'b-carousel-block')} {...panelBodyIF}>
			<Typography value={typo} onChange={val => setAttributes({ caption: { ...caption, typo: val } })} defaults={{ fontSize: { desktop: 16, tablet: 15, mobile: 15 } }} />

			{'onImage' === position && <>
				<Background className='mt15' label={__('Overlay:', 'b-carousel-block')} value={overlay} onChange={val => setAttributes({ caption: { ...caption, overlay: val } })} isImage={false} />
				<small>{__('Overlay will show only if the caption position is on the image.', 'b-carousel-block')}</small>
			</>}

			<ColorsControl value={colors} onChange={val => setAttributes({ caption: { ...caption, colors: val } })} defaults={{ color: '#fff', bg: '#0000' }} />

			<BoxControl label={__('Padding:', 'b-carousel-block')} values={capPadding} resetValues={{ top: '5px', right: '8px', bottom: '50px', left: '8px' }} onChange={val => setAttributes({ caption: { ...caption, padding: val } })} />
		</PanelBody>}
	</>
}
export default Style;