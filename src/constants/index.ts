import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	carrent,
	jobit,
	tripguide,
	threejs,
	nokia,
	omers,
	singlestore,
	graphql,
	cPlusPlus,
	nextjs,
  sql,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Software Developer',
		icon: creator,
	},
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Full-stack Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'c++',
		icon: cPlusPlus,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Next JS',
		icon: nextjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
  {
    name: 'sql',
    icon: sql
  },
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'graphql',
		icon: graphql,
	},
	// {
	// 	name: 'figma',
	// 	icon: figma,
	// },
	// {
	// 	name: 'docker',
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: 'Software Engineer',
		companyName: 'SingleStore',
		icon: singlestore,
		iconBg: '#E6DEDD',
		date: 'May 2023 - Present',
		points: [],
	},
	{
		title: 'Full-stack Developer',
		companyName: 'OMERS',
		icon: omers,
		iconBg: '#383E56',
		date: 'Sept - Dec 2022',
		points: [
			'Designed and developed a social network application utilizing Next.js and Socket.io, enabling employees to connect and communicate with each other more easily and efficiently',
			'Increased test coverage by 5% by writing comprehensive unit, integration, and end-to-end tests using Jest, resulting in a more robust and reliable application',
			'Optimized code efficiency and maintainability by managing side effects using Redux-Saga, resulting in improved readability and streamlined development processes',
		],
	},
	{
		title: 'Web Developer',
		companyName: 'Nokia',
		icon: nokia,
		iconBg: '#E6DEDD',
		date: 'Jan - Apr 2022',
		points: [
			'Engineered React-based user interface components to optimize network resources in IP/MPLS applications',
			'Designed and implemented a comprehensive graphical system to visualize network connections and latency between IP addresses',
			'Enhanced user experience by creating a user-friendly form for creating Segment Routing paths, consolidating different forms into one recursive form',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Car Rent',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carrent,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Job IT',
		description:
			'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Trip Guide',
		description:
			'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'supabase',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/',
	},
];

export { services, technologies, experiences, testimonials, projects };
