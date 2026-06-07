import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade, EffectCreative } from 'swiper/modules';

import Slide from '../Slide';
import { prefix } from '../../../utils/data';

const Default = ({ attributes, id, initialSlide = 0, isBackend = false }) => {
	const { carousels, carouselOptions, isPage, isPrevNext } = attributes;
	const { columns, columnGap, isLoop, allowTouchMove = true, speed, autoplayOptions, freeMode = {}, effect = 'slide', mousewheel = {}, pagination = {} } = carouselOptions;
	const { enabled: isAutoplay, delay = 1.5 } = autoplayOptions;

	return <Swiper
		className={`${prefix} default`}
		direction='horizontal'
		initialSlide={initialSlide}
		slidesPerView={columns.mobile}
		breakpoints={{ 576: { slidesPerView: columns.tablet }, 768: { slidesPerView: columns.desktop } }}
		spaceBetween={columnGap}
		modules={[Autoplay, Navigation, Pagination, EffectFade, EffectCreative]}
		loop={isLoop}
		allowTouchMove={isBackend ? false : allowTouchMove}
		grabCursor={isBackend ? false : allowTouchMove}
		speed={speed * 1000}
		autoplay={isAutoplay && !isBackend ? { ...autoplayOptions, delay: delay * 1000 } : false}
		freeMode={freeMode}
		effect={effect}
		fadeEffect={{ crossFade: false }}
		creativeEffect={{
			prev: {
				shadow: true,
				translate: ['-120%', 0, -500],
			},
			next: {
				shadow: true,
				translate: ['120%', 0, -500],
			}
		}}
		mousewheel={mousewheel}
		pagination={isPage ? {
			clickable: pagination?.clickable,
			dynamicBullets: pagination?.dynamicBullets,
			forceClass: true
		} : false}
		navigation={isPrevNext ? { enabled: true } : false}
		allowSlidePrev={true}
		allowSlideNext={true}
		autoHeight={false}
		notificationClass={null}
	>
		{carousels?.map((carousel, index) => <SwiperSlide key={index}>
			<Slide {...{ attributes, carousel, index, id }} />
		</SwiperSlide>)}
	</Swiper>
}
export default Default;