import { FC } from 'react'
import { projects } from '@/app/shared/utils/global-utils.ts'

import ProjectCard from '@/app/theme/components/ProjectCard/ProjectCard.tsx'

import { IProjectCard } from '@/app/shared/models/global-interface.ts'

const ExperienceSection: FC = () => {
	return (
		<section className='w-full grid auto-rows-[380px] lg:auto-rows-[140px] grid-cols-8 gap-4'>
			{projects.map((project: IProjectCard) => {
				return <ProjectCard key={project.id} {...project} />
			})}
		</section>
	)
}

export default ExperienceSection
