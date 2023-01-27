export const SITE = {
	title: 'Ultramarine Wiki',
	description: 'The wiki for Ultramarine Linux.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '/og-image.png',
		alt: 'Ultramarine Linux Wiki Text with an abstract background with two blue circles'
	},
	twitter: 'UltramarineProj',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Deutsch: 'de'
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/ultramarine-linux/wiki-new`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/bUuQasHdrF`;


export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Welcome', link: 'en/welcome' },
		],
		'Installation': [{ text: 'Getting started', link: 'en/installation/getting-started' }],
	},
	de: {
		'Einführung': [
			{ text: 'Willkommen', link: 'de/welcome' },
		],
		'Installation': [{ text: 'Page 4', link: 'en/page-4' }],
	}
};
