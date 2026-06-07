import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';

import { Label } from '../../../../../../bpl-tools/Components';
import { Notice } from '../../../../../../bpl-tools/Components';
import { BorderControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { PremiumBadge, PremiumPanel } from '../../../../../../bpl-tools/ProControls';
import { effects } from '../../../../utils/options';
import { pricingUrl } from '../../../../utils/data';

const Options = ({ attributes, setAttributes, updateOptions }) => {
	const { carouselOptions, isPage, isPrevNext } = attributes;
	const { isLoop, speed, autoplayOptions, effect = 'slide', pagination = {} } = carouselOptions;
	const { enabled: isAutoplay, delay = 1.5 } = autoplayOptions;

	const panelBodyIF = {
		className: 'bPlPanelBody',
		initialOpen: false
	}

	return <>
		<PanelBody className='bPlPanelBody' title={__('Basic', 'b-carousel-block')}>
			<ToggleControl label={__('Enable Loop', 'b-carousel-block')} checked={isLoop} onChange={val => updateOptions('isLoop', val)} />
			<small>{__('Total number of slides must be more then column count', 'b-carousel-block')}</small>

			<Label>{__('Speed (s):', 'b-carousel-block')}</Label>
			<RangeControl value={speed} onChange={val => updateOptions('speed', val)} min={0} max={10} step={.05} />
			<small>{__('Smaller speed will be slide faster', 'b-carousel-block')}</small>

			<Notice status='premium' isIcon={true}>{__('Unlock touch move with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>


		<PanelBody title={__('Autoplay', 'b-carousel-block')} {...panelBodyIF}>
			<ToggleControl label={__('Enable Autoplay', 'b-carousel-block')} checked={isAutoplay} onChange={val => updateOptions('autoplayOptions', val, 'enabled')} />
			<small>{__('Autoplay will not work in backend', 'b-carousel-block')}</small>

			{isAutoplay && <>
				<Label>{__('Autoplay Delay (s):', 'b-carousel-block')}</Label>
				<RangeControl value={delay} onChange={val => updateOptions('autoplayOptions', val, 'delay')} min={0} max={10} step={.05} />
				<small>{__('Smaller delay will be autoplay faster', 'b-carousel-block')}</small>
			</>}

			<Notice status='premium' isIcon={true}>{__('Unlock disable on interaction, pause on mouse enter, reverse direction, and stop on last slide with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>


		<PanelBody title={<>{__('Free Mode', 'b-carousel-block')}<PremiumBadge /></>} {...panelBodyIF}>
			<PremiumPanel title={__('Free Mode', 'b-carousel-block')} description={__('Smooth scrolling with dragging the slide. Enable free mode and sticky options.', 'b-carousel-block')} pricingUrl={pricingUrl} />
		</PanelBody>


		<PanelBody title={__('Effects', 'b-carousel-block')} {...panelBodyIF}>
			<PanelRow>
				<Label className=''>{__('Effect:', 'b-carousel-block')}</Label>
				<SelectControl value={effect}
					onChange={val => {
						setAttributes({
							carouselOptions: {
								...carouselOptions,
								effect: val,
								columns: ['slide'].includes(val) ? { desktop: 3, tablet: 2, mobile: 1 } : { desktop: 1, tablet: 1, mobile: 1 }
							},

							width: { desktop: '100%', tablet: '100%', mobile: '100%' },
							height: { desktop: '350px', tablet: '300px', mobile: '250px' },
							padding: { vertical: '10px', horizontal: '10px' }
						});
					}}
					options={effects}
				/>
			</PanelRow>
			<small>{__('To work fade & creative effects properly, set single column per view.', 'b-carousel-block')}</small>
			<br />
			<small>{__('Some settings may change when effect will be changed.', 'b-carousel-block')}</small>

			<Notice status='premium' isIcon={true}>{__('Unlock cube, coverflow, flip, and cards effects with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>


		<PanelBody title={<>{__('Mousewheel', 'b-carousel-block')}<PremiumBadge /></>} {...panelBodyIF}>
			<PremiumPanel title={__('Mousewheel', 'b-carousel-block')} description={__('Enable slide on mousewheel for a better user experience.', 'b-carousel-block')} pricingUrl={pricingUrl} />
		</PanelBody>


		<PanelBody title={__('Pagination', 'b-carousel-block')} {...panelBodyIF}>
			<ToggleControl label={__('Show Pagination', 'b-carousel-block')} checked={isPage} onChange={val => setAttributes({ isPage: val })} />

			{isPage && <>
				<ToggleControl className='mt10' label={__('Enable Pagination Clickable', 'b-carousel-block')} checked={pagination.clickable} onChange={val => updateOptions('pagination', val, 'clickable')} />

				<BorderControl label={__('Pagination Border:', 'b-carousel-block')} value={pagination.border} onChange={val => updateOptions('pagination', val, 'border')} />
			</>}

			<Notice status='premium' isIcon={true}>{__('Unlock pagination device visibility and dynamic bullets with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>


		<PanelBody title={__('Navigation', 'b-carousel-block')} {...panelBodyIF}>
			<ToggleControl label={__('Show Navigation', 'b-carousel-block')} checked={isPrevNext} onChange={val => setAttributes({ isPrevNext: val })} />

			<Notice status='premium' isIcon={true}>{__('Unlock navigation device visibility with Premium version.', 'b-carousel-block')}</Notice>
		</PanelBody>
	</>
}
export default Options;