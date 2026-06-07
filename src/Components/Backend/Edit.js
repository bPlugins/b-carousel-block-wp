import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { useBlockProps } from '@wordpress/block-editor';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import Carousel from '../Common/Carousel';
import { layouts } from '../../utils/options';
import { crownIcon } from '../../../../bpl-tools/utils/icons';
import { pricingUrl } from '../../utils/data';

const Edit = props => {
	const { attributes: attr, setAttributes, isEditorSidebarOpened } = props;
	const { layout: layoutAttr = '', carousels, carouselOptions, isPage, isPrevNext } = attr;
	const layout = ('' === layoutAttr && 'https://placehold.co/809x500/f96c96/fff/svg' !== carousels?.[0]?.image?.url) ? 'default' : layoutAttr; // Check old user
	const attributes = { ...attr, layout };

	const blockProps = useBlockProps();

	const [activeIndex, setActiveIndex] = useState(0);
	const [rendered, setRendered] = useState(true);

	useEffect(() => {
		setRendered(!rendered);
	}, [carousels, carouselOptions, isPage, isPrevNext, isEditorSidebarOpened]);

	const CarouselEl = () => <Carousel attributes={attributes} id={blockProps.id} initialSlide={activeIndex} isBackend={true} />

	return <>
		<Settings {...{ attributes, setAttributes, setActiveIndex }} />

		<div {...blockProps} id={blockProps.id}>
			<Style attributes={attributes} id={blockProps.id} />

			{!layout ?
				<div className="bicbLayoutSelector">
					<h2>{__('Select Layout', 'b-carousel-block')}</h2>

					<div className='bicbLayouts'>
						{layouts?.map(item => {
							const { label, value, icon } = item;

							return <div key={value} className='bicbLayout' onClick={() => setAttributes({ layout: value })}>
								<span className='proBadge'>Pro</span>

								{icon}

								<div className='label'>{label}</div>
							</div>
						})}
					</div>

					<div className='proLayoutsNotice'>
						{crownIcon}
						<p>
							{__('Masonry layout is available in the', 'b-carousel-block')} <a href={pricingUrl} target='_blank' rel='noopener noreferrer'>{__('PREMIUM VERSION', 'b-carousel-block')}</a>
						</p>
					</div>
				</div> :
				<CarouselEl />}
		</div>
	</>;
};
export default withSelect((select) => {
	return {
		isEditorSidebarOpened: !!select('core/edit-post')?.isEditorSidebarOpened()
	};
})(Edit);