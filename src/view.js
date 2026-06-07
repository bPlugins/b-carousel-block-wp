import { createRoot } from 'react-dom/client';

import 'swiper/css/bundle';
import './style.scss';
import Style from './Components/Common/Style';
import Carousel from './Components/Common/Carousel';

document.addEventListener('DOMContentLoaded', () => {
	const carouselEls = document.querySelectorAll('.wp-block-bicb-carousel');
	carouselEls.forEach(carouselEl => {
		const attr = JSON.parse(carouselEl.dataset.attributes);
		const { layout: layoutAttr = '', carousels } = attr;
		const layout = ('' === layoutAttr && 'https://placehold.co/809x500/f96c96/fff/svg' !== carousels?.[0]?.image?.url) ? 'default' : layoutAttr; // Check old user
		const attributes = { ...attr, layout };

		createRoot(carouselEl).render(<>
			<Style attributes={attributes} id={carouselEl.id} />

			<Carousel attributes={attributes} id={carouselEl.id} />
		</>);

		carouselEl?.removeAttribute('data-attributes');
	});
});