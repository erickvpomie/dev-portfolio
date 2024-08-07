import { v4 as uuid } from 'uuid'

import {
	IDevToolsElement,
	IExperienceCard,
	IProjectCard,
} from '@/app/shared/models/global-interface.ts'

import dd3_bg from '@/assets/dd3_bg.webp'
import dd360 from '@/assets/dd360.webp'
import nolab_bg from '@/assets/nolab_bg.webp'
import nolab from '@/assets/nolab.webp'
import esperanza_bg from '@/assets/esperanza_bg.webp'
import esperanza from '@/assets/esperanza.webp'
import bwl_bg from '@/assets/bwl_bg.webp'
import bwl from '@/assets/bwl.svg'
import editor_dd3 from '@/assets/dd3land-editor.webp'
import profesional from '@/assets/profesional-urbano.webp'
import bluee from '@/assets/bluee-iot.webp'
import gbm from '@/assets/GBM.webp'
import asociados from '@/assets/asociados.webp'
import protec from '@/assets/protec.webp'
import gpmass_bg from '@/assets/gpmass.webp'

export const projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'Woow asociados',
		description: 'projects-section.projects.asociados',
		screenShot: asociados,
		demoLink: 'https://asociados.poweredbywoow.com/hdi',
		className: 'lg:row-span-4 xl:col-span-4',
		index: 0,
		technologies: ['React', 'Zustand', 'ViteJS', 'Mantine', 'ESLint'],
		newProject: true,
	},
	{
		id: uuid(),
		project_name: 'DD3Land Editor',
		description: 'projects-section.projects.DD3Land',
		screenShot: editor_dd3,
		demoLink: 'https://dd3.mx/',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 1,
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS S3'],
	},
	{
		id: uuid(),
		project_name: 'ProfesionalUrbano',
		description: 'projects-section.projects.profesional',
		screenShot: profesional,
		demoLink: 'https://profesionalurbano.com/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
		technologies: ['Laravel', 'PHP'],
	},
	{
		id: uuid(),
		project_name: 'Stock Market',
		description: 'projects-section.projects.stock',
		screenShot: gbm,
		demoLink: 'https://stock-market-demo.vercel.app/home',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
	},
	{
		id: uuid(),
		project_name: 'Bluee IoT',
		description: 'projects-section.projects.bluee',
		screenShot: bluee,
		demoLink: 'https://bluee.com.mx/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 4,
		technologies: ['Angular', 'TypeScript', 'SASS'],
	},
]

export const experiences: IExperienceCard[] = [
	{
		id: uuid(),
		company_logo: protec,
		company_name: 'Protec',
		position_name: 'Front-end Developer Senior',
		dates: 'experience-section.companies.promass.dates',
		url_site: 'https://www.tiprotec.com.mx/',
		background_url: gpmass_bg,
	},
	{
		id: uuid(),
		company_logo: dd360,
		company_name: 'DD360',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.DD360.dates',
		url_site: 'https://dd360.mx',
		background_url: dd3_bg,
	},
	{
		id: uuid(),
		company_logo: nolab,
		company_name: 'Nolab',
		position_name: 'FullStack Developer Mid',
		dates: 'experience-section.companies.nolab.dates',
		url_site: 'https://nolab.mx/',
		background_url: nolab_bg,
	},
	{
		id: uuid(),
		company_logo: esperanza,
		company_name: 'Grupo Esperanza',
		position_name: 'Full Stack Developer Jr',
		dates: 'experience-section.companies.esperanza.dates',
		url_site: 'https://esperanza.mx/',
		background_url: esperanza_bg,
	},
	{
		id: uuid(),
		company_logo: bwl,
		company_name: 'BWL',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.bwl.dates',
		url_site: 'https://www.bwl.com.mx/',
		background_url: bwl_bg,
	},
]

export const devTools: IDevToolsElement[] = [
	{
		id: uuid(),
		name: 'HTML5',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'CSS3',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
	},
	{
		id: uuid(),
		name: 'TypeScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	},
	{
		id: uuid(),
		name: 'SASS',
		icon: 'https://www.svgrepo.com/show/374061/sass.svg',
	},
	{
		id: uuid(),
		name: 'React',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		id: uuid(),
		name: 'Angular',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
	},
	{
		id: uuid(),
		name: 'Next.js',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
		className: 'dark:invert opacity-70',
	},
	{
		id: uuid(),
		name: 'Vite',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
	},
	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},
	{
		id: uuid(),
		name: '.NET',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
	},
	{
		id: uuid(),
		name: 'Laravel',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
	},
	{
		id: uuid(),
		name: 'Node.js',
		icon: 'https://www.svgrepo.com/show/355140/node.svg',
	},
	{
		id: uuid(),
		name: 'MongoDB',
		icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
	},
	{
		id: uuid(),
		name: 'MySQL',
		icon: 'https://www.svgrepo.com/show/306453/mysql.svg',
		className: 'dark:invert opacity-70',
	},
]
