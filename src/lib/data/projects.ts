export type Project = {
	title: string;
	blurb: string;
	tags: string[];
	href?: string;
	status?: string;
};

export const projects: Project[] = [
	{
		title: 'my homelab',
		blurb: 'yeeeeeeeeah, this is the most important thing in my life. a lot of projects from here were initally hosted on my homelab. also it became very useful in some small but useful things, such as my NAS, for example',
		tags: ['proxmox', 'docker', 'grafana'],
		status: 'active',
		href: 'https://creepy0964.xyz/resume'
	},
	{
		title: 'KSMP infrastructure',
		blurb: 'i\'m lead architector and engineer of kapelka54327\'s minecraft server. more info in my "resume" page',
		tags: ['minecraft', 'traefik, nginx', 'jira, confluence, vikunja, gitea', 'dns, mail'],
		status: 'active',
		href: 'https://ksmp.fun'
	},
	// {
	// 	title: 'cozylate',
	// 	blurb: 'currently i am backend-developer of cozylate, translate management system for cozy inn\'s internal needs',
	// 	tags: ['golang', 'surrealdb, redis', 'smtp, oidc'],
	// 	status: 'in development',
	// 	href: 'https://cozy-inn.ru'
	// },
	{
		title: 'i guess, this site also counts???',
		blurb: 'welp. i made it with claude opus 4.8 help, because i HATE frontend development :p',
		tags: ['claude opus 4.8', 'svelte'],
		status: 'done (at least for now)',
		href: 'https://creepy0964.xyz'
	},
	{
		title: 'this is currently a placeholder',
		blurb: 'i have a lot of projects i\'d like to list here, but some of them need to be refactored, at very least. some of them are listed on my github',
		tags: ['placeholder'],
		href: 'https://github.com/creepy0964'
	}
];
