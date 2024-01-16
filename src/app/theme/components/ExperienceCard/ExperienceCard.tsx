import { FC } from 'react'
import { LuExternalLink } from 'react-icons/lu'
import { IExperienceCard } from '../../../shared/models/global-interface.ts'
import { useHover } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ExperienceCard: FC<IExperienceCard> = ({
	id,
	company_logo,
	company_name,
	position_name,
	dates,
	url_site,
	background_url,
}) => {
	const [ref, hovering] = useHover()
	const { t } = useTranslation('global')
	return (
		<motion.div
			key={id}
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}
			viewport={{ once: true }}
			className='row-span-1 col-span-8 lg:row-span-2 lg:col-span-2 bg-white dark:bg-raisin-black rounded-3xl overflow-hidden relative flex flex-col py-14 items-center justify-between'
		>
			<div className='flex flex-col items-center'>
				<img
					className={`w-40 h-10 object-contain z-[1] ${
						company_name !== 'Nolab' && 'invert grayscale'
					}`}
					src={company_logo}
					alt={company_name}
				/>
				<p className='text-center text-moonlit leading-5 mt-2 z-[1] font-medium'>
					{position_name}
					<br />
					{t(dates)}
				</p>
			</div>
			<a
				className='py-2 px-4 bg-[#0568fe] text-moonlit font-medium rounded-lg flex items-center gap-2 z-[1]'
				href={url_site}
				target='_blank'
				title={`${company_name} website`}
			>
				<span>
					{t('others-translations.visit')}&nbsp;
					{company_name}
				</span>
				<LuExternalLink />
			</a>
			<img
				className={`w-full h-full object-cover absolute left-0 top-0 z-0 dark:opacity-60 transition-all duration-300 ${
					hovering && 'scale-110'
				}`}
				src={background_url}
				alt={`${company_name}_bg`}
			/>
		</motion.div>
	)
}

export default ExperienceCard
