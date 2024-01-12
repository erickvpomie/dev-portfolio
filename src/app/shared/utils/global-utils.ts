import {
	IDevToolsElement,
	IExperienceCard,
	IProjectCard,
} from '../models/global-interface.ts'
import { v4 as uuid } from 'uuid'
import dd3_bg from '../../../assets/dd3_bg.webp'
import dd360 from '../../../assets/dd360.webp'
import nolab_bg from '../../../assets/nolab_bg.webp'
import nolab from '../../../assets/nolab.webp'
import esperanza_bg from '../../../assets/esperanza_bg.webp'
import esperanza from '../../../assets/esperanza.webp'
import bwl_bg from '../../../assets/bwl_bg.webp'
import bwl from '../../../assets/bwl.svg'
import editor_dd3 from '../../../assets/dd3land-editor.webp'
import profesional from '../../../assets/profesional-urbano.webp'
import bluee from '../../../assets/bluee-iot.webp'
import gbm from '../../../assets/GBM.webp'

export const Projects: IProjectCard[] = [
	{
		id: uuid(),
		project_name: 'DD3Land Editor',
		description: "Build your meta-verse with DD3Land's editor technology.",
		screenShot: editor_dd3,
		demoLink: 'https://dd3.mx/',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 1,
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AWS S3'],
	},
	{
		id: uuid(),
		project_name: 'ProfesionalUrbano',
		description: 'A platform to connect professionals with clients.',
		screenShot: profesional,
		demoLink: 'https://profesionalurbano.com/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
		technologies: ['Laravel', 'PHP'],
	},
	{
		id: uuid(),
		project_name: 'Stock Market',
		description: 'Stock Market App to track your favorite stocks.',
		screenShot: gbm,
		demoLink: 'https://fluffy-marigold-adc835.netlify.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
	},
	{
		id: uuid(),
		project_name: 'Bluee IoT',
		description: 'Landing page for Bluee IoT',
		screenShot: bluee,
		demoLink: 'https://bluee.com.mx/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 4,
		technologies: ['Angular', 'TypeScript', 'SASS'],
	},
]
export const Experiences: IExperienceCard[] = [
	{
		id: uuid(),
		company_logo: dd360,
		company_name: 'DD360',
		position_name: 'Front-end Developer',
		dates: 'Jul. 2022 — Nov. 2023',
		url_site: 'https://dd360.com/',
		background_url: dd3_bg,
	},
	{
		id: uuid(),
		company_logo: nolab,
		company_name: 'Nolab',
		position_name: 'FullStack Developer Mid',
		dates: 'Feb. 2022 — Jul. 2022',
		url_site: 'https://nolab.mx/',
		background_url: nolab_bg,
	},
	{
		id: uuid(),
		company_logo: esperanza,
		company_name: 'Grupo Esperanza',
		position_name: 'Full Stack Developer Jr',
		dates: 'Nov. 2021 — Feb. 2022',
		url_site: 'https://esperanza.mx/',
		background_url: esperanza_bg,
	},
	{
		id: uuid(),
		company_logo: bwl,
		company_name: 'BWL',
		position_name: 'Front-end Developer',
		dates: 'Jan. 2021 — Nov. 2021',
		url_site: 'https://www.bwl.com.mx/',
		background_url: bwl_bg,
	},
]

export const DevTools: IDevToolsElement[] = [
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
		icon: 'https://sass-lang.com/assets/img/logos/logo.svg',
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
		icon: 'https://rakesh-gupta29.github.io/img/logos/nextjs.svg',
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
]
