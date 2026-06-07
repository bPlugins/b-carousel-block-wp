import { forwardRef, useRef } from 'react';

import { sanitizeHTML } from '../../../../bpl-tools/utils/common';

const Slide = (props) => {
	const { attributes, carousel, index, ...restProps } = props;
	const { elements = { linkNewTab: false, linkOn: 'image' }, caption: attrCap = {} } = attributes;
	const { position: capPos = 'onImage' } = attrCap;
	const { image, action = 'none', link = '' } = carousel;
	const { url = '' } = image || {};

	const className = `carouselItem carouselItem-${index}`;

	if (!url) {
		return null;
	}

	return ('link' === action && link && 'image' === elements?.linkOn && 'onImage' === capPos) ?
		<a className={className} href={link} target={elements?.linkNewTab ? '_blank' : '_self'} rel='noreferrer' {...restProps}>
			<SlideItem {...props} />
		</a> :
		<div className={className} {...restProps}>
			<SlideItem {...props} />
		</div>
}
export default Slide;

const SlideItem = ({ attributes, carousel }) => {
	const { elements = { linkNewTab: false, linkOn: 'image' } } = attributes;
	const { image, action = 'none', link = '' } = carousel;

	const captionRef = useRef(null);

	const linkProps = { linkNewTab: elements?.linkNewTab, action, link };

	return <>
		<figure className='image'>
			{'image' === elements?.linkOn ?
				<LinkEl {...linkProps}>
					<ImageEl image={image} />
				</LinkEl> :
				<ImageEl image={image} />
			}
		</figure>

		<CaptionEl ref={captionRef} attributes={attributes} carousel={carousel} />
	</>
}

const ImageEl = ({ image }) => {
	const { url = '', alt = '', title = '' } = image || {};

	return <img src={url} alt={alt || title} />
}

const CaptionEl = forwardRef(({ attributes, carousel }, ref) => {
	const { elements = { linkNewTab: false, linkOn: 'image' }, caption } = attributes;
	const { display = 'none', position = 'onImage' } = caption || {};
	const { action = 'none', link = '', caption: capText = '' } = carousel;

	const linkProps = { linkNewTab: elements?.linkNewTab, action, link };

	return (capText && 'none' !== display) && <div ref={ref} className={`caption display-${display} ${position}`}>
		{'caption' === elements?.linkOn ? <LinkEl {...linkProps}>
			<p dangerouslySetInnerHTML={{ __html: sanitizeHTML(capText) }} />
		</LinkEl> : <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(capText) }} />}
	</div>
})

const LinkEl = ({ linkNewTab, action = 'none', link, children }) => {
	return ('link' === action && link) ? <a href={link} target={linkNewTab ? '_blank' : '_self'} rel='noreferrer'>
		{children}
	</a> : children;
}