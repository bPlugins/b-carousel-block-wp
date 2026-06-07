import { __ } from '@wordpress/i18n';
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import { BBlocksAds } from '../../../../../bpl-tools/Components';
import { AdvertiseCard } from '../../../../../bpl-tools/ProControls';

import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Options from './Options/Options';
import Style from './Style/Style';
import { updateData } from '../../../../../bpl-tools/utils/functions';
import { pricingUrl } from '../../../utils/data';

const Settings = ({ attributes, setAttributes, setActiveIndex }) => {
	const { alignment = 'center', carouselOptions } = attributes;

	const updateOptions = (type, val, ...props) => {
		setAttributes({ carouselOptions: updateData(carouselOptions, val, type, ...props) });
	}

	const commonProps = { attributes, setAttributes }
	const genOptProps = { ...commonProps, updateOptions }

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{'general' === tab.name && <General {...genOptProps} setActiveIndex={setActiveIndex} />}


				{'options' === tab.name && <Options {...genOptProps} />}


				{'style' === tab.name && <Style {...commonProps} />}
			</>}</TabPanel>

			<AdvertiseCard planLink={pricingUrl} />
		</InspectorControls>


		<BlockControls>
			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Carousel Alignment')} alignmentControls={[
				{ title: __('Carousel in left', 'b-carousel-block'), align: 'left', icon: 'align-left' },
				{ title: __('Carousel in center', 'b-carousel-block'), align: 'center', icon: 'align-center' },
				{ title: __('Carousel in right', 'b-carousel-block'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};
export default Settings;