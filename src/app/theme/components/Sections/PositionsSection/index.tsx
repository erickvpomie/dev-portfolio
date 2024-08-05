import { FC } from 'react'
import { experiences } from '@/app/shared/utils/global-utils.ts'

import ExperienceCard from '@/app/theme/components/ExperienceCard/ExperienceCard.tsx'

import { IExperienceCard } from '@/app/shared/models/global-interface.ts'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const PositionsSection: FC = () => {
	return (
		<>
			<div className='hidden lg:block max-w-full relative'>
				<Swiper
					slidesPerView={4}
					spaceBetween={16}
					className='w-full mySwiper max-w-full'
					breakpoints={{
						1024: {
							slidesPerView: 3.5,
						},
						1280: {
							slidesPerView: 4,
						},
					}}
					navigation
					modules={[Navigation]}
					style={{
						cursor: 'grab',
					}}
				>
					{experiences.map((experience: IExperienceCard, index: number) => (
						<SwiperSlide key={index}>
							<ExperienceCard {...experience} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<section className='w-full grid auto-rows-[260px] grid-cols-8 gap-4 lg:hidden'>
				{experiences.map((experience: IExperienceCard) => (
					<ExperienceCard key={experience.id} {...experience} />
				))}
			</section>
		</>
	)
}

export default PositionsSection
