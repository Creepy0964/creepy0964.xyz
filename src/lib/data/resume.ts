// resume data. creepy0964 — edit content here, layout follows.

export type SkillGroup = {
	category: string;
	items: { name: string; level?: string; stack?: string[] }[];
};

export const skills: SkillGroup[] = [
	{
		category: 'languages',
		items: [
			{
				name: 'go',
				level: 'primary',
				stack: ['fiber', 'stdlib', 'pgx', 'gorm', 'surrealdb', 'slog', 'go-playground/validator']
			},
			{ name: 'typescript', level: 'primary', stack: ['express.js', 'node.js', 'telegraf'] },
			{ name: 'python', level: 'confident', stack: ['fastapi', 'flask', 'sqlalchemy', 'selenium'] },
			{ name: 'bash', level: 'confident' }
		]
	},
	{
		category: 'containers / virtualization',
		items: [
			{
				name: 'docker',
				stack: ['docker compose', 'docker swarm', 'docker registry', 'multi-stage building']
			},
			{ name: 'proxmox' },
			{ name: 'lxc' },
		]
	},
	{
		category: 'ci/cd',
		items: [
			{ name: 'github actions' },
			{ name: 'gitea actions' },
			{ name: 'gitlab ci' },
			{ name: 'jenkins' }
		]
	},
	{
		category: 'infrastructure',
		items: [
			{ name: 'terraform' },
			{ name: 'ansible' },
			{ name: 'grafana' },
			{ name: 'prometheus' },
			{ name: 'netbird' },
			{ name: 'traefik' },
			{ name: 'nginx' },
			{ name: 'wireguard' },
			{ name: 'samba' },
			{ name: 'docker-mailserver' },
			{ name: 'dns servers' }
		]
	},
	{
		category: 'utilities',
		items: [{ name: 'tcpdump' }, { name: 'ufw' }, { name: 'iptables' }]
	}
];

export type Experience = {
	role: string;
	org: string;
	period: string;
	summary: string;
	details: string[];
	tags: string[];
};

export const experience: Experience[] = [
	{
		role: 'infrastructure engineer',
		org: 'shadowtech labs: internal r&d platform',
		period: '2024 — 2025',
		summary: 'the company needed a completely isolated, autonomous environment for internal r&d and testing, fully independent of public cloud providers due to strict data privacy policies. i was responsible for designing and deploying the entire core infrastructure from scratch on bare-metal hardware. here is what i built:',
		details: [
			'infrastructure as code & automation: defined the complete target server state and container environments using terraform. wrote reusable ansible playbooks to automate bare-metal host provisioning, lxc container creation on proxmox ve, and initial security hardening across all nodes',
			'virtualization & containerization layers: engineered the architecture around lightweight lxc containers instead of heavy vms to eliminate hypervisor overhead. inside these isolated nodes, i established docker environments to spin up r&d microservices, ensuring strict resource limits (cpu/ram) and dual-layer isolation',
			'host security & vpn tunneling: implemented a zero-trust mesh network layer using netbird and wireguard tunnels to interconnect remote nodes and secure root-level access. the underlying hosts and container networks were fully locked down via custom iptables and ufw rule-sets, dropping all unauthorized traffic',
			`automation scripts & backups: developed a lightweight backup utility (written in bash/go) that runs as a systemd service; it automatically stops target docker environments, takes consistent snapshots of data volumes, streams them to isolated storage, and fires up the containers back with zero manual intervention`
		],
		tags: ['docker', 'ci/cd', 'proxmox ve', 'lxc', 'terraform', 'ansible', 'netbird', 'wireguard']
	},
	{
		role: 'lead system engineer',
		org: 'KSMP: minecraft server',
		period: '2025 - now',
		summary: 'when i first joined the server, it was working, but definitely not perfect. the whole infrastructure was built to last for just one season, and the owner team had no idea where the technical part would go next. even worse, when the final decisions were finally made, everyone realized we needed to host not just the game server, but some internal stuff as well',
		details: [
			'minecraft server: initially, it was hosted on HORRIBLE hardware. i did a full audit of the server and optimized it using Aikar\'s flags and setting up/configuring a bunch of performance mods: lithium, krypton, async, c2me, servercore', 
			`lighting: at the launch of the second season, a lighting bug appeared on the server. my colleague and i analyzed the server via a spark heap dump and fixed the problem by removing the mod for 2032 world height: because of it, the game was constantly trying to recalculate lighting but couldn't do it, which not only bloated the memory but also tanked the TPS. in the end, the average MSPT dropped from >400 ms to <100 ms, and the TPS itself stabilized at no less than 15`,
			`infrastructure: the team needed a single workspace for all administrative tasks, so i took care of deploying the infrastructure: prepared the filedump (copyparty), the mail (docker-mailserver with postfix+dovecot under the hood), a dns server (technitium), a task tracker (vikunja), a documentation hub (which was a gitea server integrated with obsidian), and server monitoring (collecting metrics from the server via prometheus and grafana). also the fileserver and grafana were exposed into the internet via reverse proxy and VPN tunneling (traefik and netbird)`
		],
		tags: ['minecraft', 'docker', 'traefik + nginx', 'copyparty', 'vikunja', 'gitea', 'grafana', 'prometheus', 'technitium', 'netbird']
	}
];

export type EduCert = {
	title: string;
	place: string;
	period: string;
	note?: string;
};

export const education: EduCert[] = [
	{
		title: 'placeholder: major',
		place: 'placeholder: university',
		period: 'placeholder: years',
		note: 'placeholder: note / track'
	}
];

// self-hosted services mentioned across the site (homelab, ksmp infra).
export const selfhosted: string[] = [
	'gitea',
	'jira',
	'confluence',
	'vikunja',
	'grafana',
	'prometheus',
	'traefik',
	'nginx',
	'docker registry',
	'docker-mailserver',
	'samba (nas)',
	'dns servers',
	'minecraft server'
];
