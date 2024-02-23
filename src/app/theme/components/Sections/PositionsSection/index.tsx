import { FC } from 'react'
import { Experiences } from '@/app/shared/utils/global-utils.ts'

import ExperienceCard from '@/app/theme/components/ExperienceCard/ExperienceCard.tsx'

import { IExperienceCard } from '@/app/shared/models/global-interface.ts'

const PositionsSection: FC = () => {
	return (
		<section className='w-full grid auto-rows-[260px] grid-cols-8 gap-4'>
			{Experiences.map((experience: IExperienceCard) => (
				<ExperienceCard {...experience} />
			))}
		</section>
	)
}

export default PositionsSection
