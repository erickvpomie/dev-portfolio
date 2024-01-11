import { IExperienceCard, IProjectCard } from '../models/global-interface.ts'
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
	},
	{
		id: uuid(),
		project_name: 'ProfesionalUrbano',
		description: 'A platform to connect professionals with clients.',
		screenShot: profesional,
		demoLink: 'https://profesionalurbano.com/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
	},
	{
		id: uuid(),
		project_name: 'Stock Market',
		description: 'A simple stock market app.',
		screenShot: gbm,
		demoLink: 'https://fluffy-marigold-adc835.netlify.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
	},
	{
		id: uuid(),
		project_name: 'Bluee IoT',
		description: 'A platform to manage IoT devices.',
		screenShot: bluee,
		demoLink: 'https://bluee.com.mx/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 4,
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
