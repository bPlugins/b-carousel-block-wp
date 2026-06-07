import { __ } from '@wordpress/i18n';

import { gutenbergTabIcon } from './icons';

const slug = 'b-carousel-block';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro, nonce, licenseActiveNonce, adminUrl = '' } = info;

	const proSuffix = isPremium ? ' Pro' : '';

	return {
		name: `Carousel Block${proSuffix}`,
		displayName: `Carousel Block${proSuffix} - Responsive Image and Content Carousel`,
		description: 'Create stunning carousels effortlessly with the Carousel Block. Showcase your images in an elegant carousel directly within the Gutenberg editor.',
		slug,
		version,
		isPremium,
		hasPro,
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
			proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
			video: 'https://www.youtube.com/watch?v=BHxDuVF2M7E',
			isYoutube: true
		},
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			// landing: `https://bplugins.com/products/${slug}/`,
			docs: `https://bplugins.com/docs/${slug}/`,
			pricing: `https://bplugins.com/products/${slug}/pricing/`,
		},
		freemius: {
			product_id: 15342,
			plan_id: 25570,
			public_key: 'pk_a45f62e2b56488230717561f70db4'
		},
		licenseActiveNonce,
		startButton: {
			label: 'Start Now',
			url: `wp-admin/post-new.php?post_type=page&title=Carousel Block&content=<!-- wp:bicb/carousel /-->&nonce=${nonce}`
		}
	}
}

export const welcomeInfo = (adminUrl) => ({
	keywords: ['Carousel', 'Effects', 'Lightbox'],
	keywordsLabel: 'Features',
	gettingStarted: {
		tabs: [
			{
				key: 'gutenberg',
				label: 'Gutenberg',
				icon: gutenbergTabIcon,
				steps: [
					{
						num: 1,
						title: 'Add the Carousel Block',
						body: 'Open the block editor on any post or page. Click the <strong>+</strong> icon in the top-left corner or type <strong>/Carousel</strong> to find and insert the Carousel block.',
						link: { url: `${adminUrl}/post-new.php?post_type=page`, label: 'Open Editor' }
					},
					{
						num: 2,
						title: 'Add Your Images',
						body: 'Click the <strong>Upload</strong> or <strong>Media Library</strong> button inside the block to add your images. You can select multiple images at once to quickly populate the carousel.'
					},
					{
						num: 3,
						title: 'Configure Carousel Options',
						body: 'Use the sidebar settings to customize <strong>loop</strong>, <strong>speed</strong>, <strong>autoplay</strong>, <strong>navigation</strong>, <strong>pagination</strong>, and choose from effects like <strong>Slide</strong>, <strong>Fade</strong>, or <strong>Creative</strong>.'
					},
					{
						num: 4,
						title: 'Style & Publish',
						body: 'Add captions, adjust responsive column settings for different devices, set image width and height, and customize caption typography and colors. Publish when ready.'
					}
				]
			}
		]
	},
	changelogs: [
		{
			version: '1.2.3 - 07 Jun 26',
			type: 'update',
			list: [
				'Update SDK',
				'Performance Improvement'
			]
		},
		{
			version: '1.2.2 - 04 Mar 26',
			type: 'update',
			list: [
				'Update: Admin Dashboard - Improved UI with better navigation and clearer feature organization.'
			]
		},
		{
			version: '1.2.1 - 10 Feb 26',
			type: 'update',
			list: [
				'Update SDK'
			]
		},
		{
			version: '1.2.0 - 26 Jan 26',
			type: 'new',
			list: [
				'Add Masonry Layout'
			]
		},
		{
			version: '1.1.8 - 24 Nov 25',
			type: 'update',
			list: [
				'Performance Improvement'
			]
		},
		{
			version: '1.1.7 - 2 Nov 25',
			type: 'fix',
			list: [
				'Fix SDK'
			]
		},
		{
			version: '1.1.6 - 31 Oct 25',
			type: 'fix',
			list: [
				'Fix issues.',
				'Update SDK'
			]
		},
		{
			version: '1.1.5 - 29 May 25',
			type: 'update',
			list: [
				'Change default images.'
			]
		},
		{
			version: '1.1.4 - 5 May 25',
			type: 'fix',
			list: [
				'Fix textdomain issue.'
			]
		}
	],
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		__('Display slide items in a masonry-style slider.', 'b-carousel-block'),
		__('Open the slide image in the lightbox.', 'b-carousel-block'),
		__('Set the slide link on the caption.', 'b-carousel-block'),
		__('Enable touch move for mobile devices.', 'b-carousel-block'),
		__('Access premium features and advanced settings.', 'b-carousel-block')
	]
})

export const demoInfo = {
	allInOneLabel: 'See All Demos',
	allInOneLink: '',
	demos: [
		{
			title: 'Default Carousel',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/b-carousel-block-default/',
			category: 'General'
		},
		{
			title: 'Caption',
			children: [
				{
					title: 'Caption',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-caption/'
				},
				{
					title: 'Caption on Hover',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-caption-on-hover/'
				},
				{
					title: 'Caption Center',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-caption-center/'
				},
				{
					title: 'Caption Bellow',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-caption-bellow/'
				}
			]
		},
		{
			title: 'Lightbox',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/b-carousel-block-lightbox/',
			category: 'Features'
		},
		{
			title: 'Effect',
			children: [
				{
					title: 'Fade Effect',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-fade-effect/'
				},
				{
					title: 'Cube Effect',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-cube-effect/'
				},
				{
					title: 'Creative Effect',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-creative-effect/'
				},
				{
					title: 'Coverflow Effect',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-coverflow-effect/'
				},
				{
					title: 'Flip Effect',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-flip-effect/'
				},
				{
					title: 'Cards Effect',
					type: 'iframe',
					url: 'https://bblockswp.com/demo/b-carousel-block-cards-effect/'
				}
			]
		}
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 15342,
	planId: 25570,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3, // choose from licenses item
		text: 'Best Value'
	}
}