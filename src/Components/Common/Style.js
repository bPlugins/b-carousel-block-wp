import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getSpaceCSS, getBoxCSS, getColorsCSS, getTypoCSS, getBorderCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';
import { prefix } from '../../utils/data';

const Style = ({ attributes, id }) => {
	const { width = {}, height, carouselOptions = {}, alignment = 'center', background, padding, pageSize, pageColor, prevNextSize, prevNextColor, image = { width: '100%' }, caption = {} } = attributes;
	const { desktop: dHeight, tablet: tHeight, mobile: mHeight } = height;
	const { pagination } = carouselOptions;

	const { verticalAlign = 'bottom', typo = { fontSize: { desktop: 16, tablet: 15, mobile: 15 } }, textAlign = 'left', colors = { color: '#fff', bg: '#0000' }, overlay = { type: 'gradient', gradient: 'linear-gradient(0deg, #000 0%, #0000 50%, #0000 100%)' }, padding: capPadding = { top: '5px', right: '8px', bottom: '5px', left: '8px' } } = caption;

	const mainSl = `#${id}`;
	const carouselSl = `${mainSl} .${prefix}`;
	const defaultSl = `${mainSl} .${prefix}.default`;
	const itemSl = `${carouselSl} .carouselItem`;
	const captionSl = `${itemSl} .caption`;
	const paginationSl = `${carouselSl} .swiper-pagination`;

	const tabWidth = width?.tablet || width?.desktop;
	const mobWidth = width?.mobile || tabWidth

	const desHeight = dHeight || ('string' === typeof height ? height : '');
	const tabHeight = tHeight || desHeight;
	const mobHeight = mHeight || tabHeight;

	return <>
		<style dangerouslySetInnerHTML={{
			__html: `
			${getTypoCSS('', typo).googleFontLink}
			${getTypoCSS(`${captionSl} p`, typo).styles}

			${mainSl}{
				${isValidCSS('text-align', alignment)}
				${getBackgroundCSS(background)}
			}
			${carouselSl}{
				${isValidCSS('width', width?.desktop)}
				${isValidCSS('padding', getSpaceCSS(padding))}
			}
			${defaultSl}{
				${isValidCSS('height', desHeight)}
			}

			${carouselSl} .swiper-wrapper .swiper-slide .image img{
				width: ${0 === parseInt(image?.width) ? 'auto' : image?.width}
			}
			${captionSl} {
				justify-content: ${'right' === textAlign ? 'end' : 'left' === textAlign ? 'start' : 'center'};
			}
			${captionSl}.onImage {
				align-items: ${'bottom' === verticalAlign ? 'end' : 'top' === verticalAlign ? 'start' : 'center'};
				${getBackgroundCSS(overlay)};
			}
			${captionSl} p {
				${isValidCSS('text-align', textAlign)}
				${getColorsCSS(colors)};
				${isValidCSS('padding', getBoxCSS(capPadding))}
			}

			${paginationSl} .swiper-pagination-bullet{
				${isValidCSS('background', pageColor)}
				${isValidCSS('width', pageSize)}
				${isValidCSS('height', pageSize)}
				${getBorderCSS(pagination?.border || {})}
			}
			${carouselSl} .swiper-button-prev,
			${carouselSl} .swiper-button-next{
				${isValidCSS('color', prevNextColor)};
			}
			${carouselSl} .swiper-button-prev::after,
			${carouselSl} .swiper-button-next::after {
				${isValidCSS('font-size', prevNextSize)};
			}

			${tabBreakpoint} {
				${carouselSl}{
					${isValidCSS('font-size', tabWidth)}
				}
				${defaultSl}{
					${isValidCSS('height', tabHeight)}
				}
				${paginationSl}{
					display: ${false === pagination?.inTablet ? 'none' : 'block'};
				}
			}

			${mobileBreakpoint} {
				${carouselSl}{
					${isValidCSS('width', mobWidth)}
				}
				${defaultSl}{
					${isValidCSS('height', mobHeight)};
				}
				${paginationSl}{
					display: ${false === pagination?.inMobile ? 'none' : 'block'};
				}
			}
			`.replace(/\s+/g, ' ')
		}} />
	</>
}
export default Style;