export interface IExperienceCard {
	id: string
	company_logo: string
	company_name: string
	position_name: string
	dates: string
	url_site: string
	background_url: string
}

export interface IProjectCard {
	id: string
	project_name: string
	description: string
	index: number
	screenShot?: string
	isPrivate?: boolean
	demoLink?: string
	className?: string
}
