import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { MdAlternateEmail, MdAutoGraph } from 'react-icons/md'
import { AnimatedCounter } from '@/app/theme/components/AnimatedCounter/AnimatedCounter.tsx'
import { useMediaQuery } from '@uidotdev/usehooks'

import { THEME_TYPES } from '@/app/shared/constants'
import { useThemeStore } from '@/app/shared/stores/useThemeStore.ts'
import { useTranslation } from 'react-i18next'

import personal from '@/assets/IMG_0659.webp'
import whiteMap from '@/assets/white_map.webp'
import darkMap from '@/assets/dark_map.webp'
import face from '@/assets/memoji_face.webp'

const HeroSection: FC = () => {
	const { THEME_LIGHT } = THEME_TYPES
	const theme = useThemeStore(state => state.theme)
	const { t } = useTranslation('global')
	const [isMobile, setIsMobile] = useState(false)
	const mobile = useMediaQuery('only screen and (max-width : 768px)')

	useEffect(() => {
		setIsMobile(mobile)
	}, [mobile])

	return (
		<section className='w-full grid auto-rows-[172px] grid-cols-6 gap-4'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden gap-10 justify-end p-6 dark:bg-raisin-black xl:col-span-4 lg:items-end sm:flex-row  lg:p-10'
			>
				<div className='absolute bg-gradient-to-t from-dusky-alt to-transparent top-0 left-0 bottom-0 right-0 z-[2]' />
				<img
					className='absolute w-full h-full object-cover left-0 top-0'
					src={personal}
					alt='personal'
					title='Personal'
				/>
				<div className='w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5 text-moonlit'>
					<span className='text-3xl font-bold leading-7'>
						José Erick Villa Pomié
					</span>
					<span className='text-lg font-medium leading-9'>
						{t('others-translations.degree')}
					</span>
					<div className='flex flex-wrap items-center gap-2 mt-1 lg:gap-3'>
						<a
							className='flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
							href='https://github.com/erickvpomie'
							target='_blank'
							rel='noreferrer'
							title='GitHub'
						>
							<FaGithub />
							<span className='hidden lg:flex'>GitHub</span>
						</a>
						<a
							className='flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
							href='https://www.linkedin.com/in/erickvpomie/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
						>
							<FaLinkedin />
							<span className='hidden lg:flex'>LinkedIn</span>
						</a>
						<a
							className='flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
							href='mailto:erickvpomie@gmail.com'
							title='Email'
						>
							<MdAlternateEmail />
							<span className='hidden lg:flex'>Email</span>
						</a>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.25, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 dark:bg-raisin-black xl:col-span-2 lg:p-7'
			>
				<h2 className='text-2xl font-bold z-[1]'>{t('about-section.title')}</h2>
				<p className='text-base w-full z-[1] opacity-70'>
					{t('about-section.description')}
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: isMobile ? 0.25 : 0.3, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-raisin-black xl:col-span-1'
			>
				<p className='text-7xl z-[1] font-bold flex items-center gap-1'>
					<span>+</span>
					<AnimatedCounter from={0} to={3} />
				</p>
				<p className='text-sm font-semibold max-w-fit opacity-70 z-[1]'>
					{t('experience-box.title')}
				</p>
				<MdAutoGraph className='w-full h-full absolute -right-10 -bottom-12 opacity-5 dark:opacity-[0.02] p-5 z-[0]' />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: isMobile ? 0.25 : 0.35, duration: 0.3 }}
				viewport={{ once: true }}
				className='row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-1 flex items-center justify-center relative'
			>
				<img
					className='absolute w-full h-full object-cover z-[1]'
					src={theme === THEME_LIGHT ? whiteMap : darkMap}
					alt='Location'
					title='Location'
				/>
				<img className='w-8 z-[2]' src={face} alt='memoji' title='memoji' />
				<div className='w-20 h-20 bg-[#98d0ff] absolute z-[1] rounded-full bg-opacity-30 border-2 border-white animate__animated animate__pulse animate__infinite infinite animate__fast' />
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='w-full h-8 backdrop-blur-sm absolute left-0 bottom-0 z-[2] flex items-center justify-center text-left text-opacity-70'
				>
					<span className='text-xs font-medium'>
						{t('location-box.title')} 🇲🇽
					</span>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default HeroSection
