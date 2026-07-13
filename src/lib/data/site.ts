// single source of "placeholder" content.
// creepy0964 — edit texts here, pages pick it up automatically.

export const site = {
	name: 'creepy0964',
	role: 'six seveeeeeeeeeen | regretfully made with claude opus 4.8',
	tagline: 'just messing around and doing some funny shit',
	location: 'nah',
	email: 'creepy0964@creepy0964.xyz',
	socials: [
		{ label: 'github', href: 'https://github.com/creepy0964', handle: '@creepy0964' },
		{ label: 'telegram', href: 'https://t.me/creepy0964', handle: '@creepy0964' },
		{ label: 'email', href: 'mailto:creepy0964@creepy0964.xyz', handle: 'creepy0964@creepy0964.xyz' }
	]
};

export type NavItem = {
	href: string;
	title: string;
	subtitle: string;
	icon: string; // key from Icon.svelte
};

export const nav: NavItem[] = [
	{ href: '/about', title: 'about', subtitle: 'who i am and what i like', icon: 'user' },
	{ href: '/resume', title: 'resume', subtitle: 'experience, stack and skills', icon: 'file-text' },
	{ href: '/projects', title: 'projects', subtitle: 'what i\'m doing in my spare time', icon: 'layers' },
	{ href: '/contacts', title: 'contacts', subtitle: 'how to reach me', icon: 'mail' }
];
