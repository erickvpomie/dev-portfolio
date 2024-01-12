import { useEffect, useState } from 'react'
import { MdAlternateEmail, MdAutoGraph } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { mapGenerator } from '../../shared/utils/map-utils.ts'
import { useThemeStore } from '../../shared/stores/useThemeStore.ts'
import Header from '../../theme/components/Header'
import face from '../../../assets/memoji_face.png'
import personal from '../../../assets/IMG_0659.webp'
import { Experiences, Projects } from '../../shared/utils/global-utils.ts'
import {
	IExperienceCard,
	IProjectCard,
} from '../../shared/models/global-interface.ts'
import ProjectCard from '../../theme/components/ProjectCard/ProjectCard.tsx'
import ExperienceCard from '../../theme/components/ExperienceCard/ExperienceCard.tsx'
import Footer from '../../theme/components/Footer/Footer.tsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useHover, useMediaQuery } from '@uidotdev/usehooks'
import { AnimatedCounter } from '../../theme/components/AnimatedCounter/AnimatedCounter.tsx'
import InfinityScroll from '../../theme/components/InfinityScroll/InfinityScroll.tsx'

const Home = () => {
	const [ref, hovering] = useHover()
	const theme = useThemeStore(state => state.theme)
	const [isMobile, setIsMobile] = useState(false)
	const mobile = useMediaQuery('only screen and (max-width : 768px)')

	useEffect(() => {
		setIsMobile(mobile)
	}, [mobile])

	useEffect(() => {
		mapGenerator()
	}, [theme])

	return (
		<div className='w-full bg-moonlit select-none text-midnight flex flex-col items-center subpixel-antialiased dark:bg-dusky dark:text-noon scroll-smooth gap-5 lg:gap-10 mb-10'>
			<Header />
			<main className='w-full mt-[5.5rem] flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-7xl'>
				<section className='w-full grid auto-rows-[192px] grid-cols-6 gap-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.4 }}
						viewport={{ once: true }}
						className='row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-10 justify-end p-6 dark:bg-raisin-black xl:col-span-4 lg:items-end sm:flex-row  lg:p-10'
					>
						<img
							className='absolute w-full h-full object-cover left-0 top-0'
							src={personal}
							alt='personal'
						/>
						<div className='w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5 text-moonlit'>
							<span className='text-3xl font-bold leading-6'>
								José Erick Villa Pomié
							</span>
							<span className='text-lg font-medium'>Software Engineer</span>
							<div className='flex flex-wrap items-center gap-2 mt-1 lg:gap-3'>
								<a
									className='flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
									href='https://github.com/erickvpomie'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub />
									<span className='hidden lg:flex'>GitHub</span>
								</a>
								<a
									className='flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
									href='https://www.linkedin.com/in/erickvpomie/'
									target='_blank'
									rel='noreferrer'
								>
									<FaLinkedin />
									<span className='hidden lg:flex'>LinkedIn</span>
								</a>
								<a
									className='flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300'
									href='mailto:erickvpomie@gmail.com'
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
						className='row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 dark:bg-raisin-black xl:col-span-2 lg:p-10'
					>
						<h2 className='text-2xl font-bold z-[1]'>About me</h2>
						<p className='text-base w-full z-[1] opacity-70'>
							Web developer with experience in designing, developing and
							maintaining front-end web applications.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: isMobile ? 0.15 : 0.3, duration: 0.3 }}
						viewport={{ once: true }}
						className='row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-raisin-black xl:col-span-1'
					>
						<p className='text-7xl z-[1] font-bold flex items-center gap-1'>
							<span>+</span>
							<AnimatedCounter from={0} to={3} />
						</p>
						<p className='text-sm font-semibold max-w-fit opacity-70 z-[1]'>
							Years of experience
						</p>
						<MdAutoGraph className='w-full h-full absolute -right-10 -bottom-12 opacity-5 dark:opacity-[0.02] p-5 z-[0]' />
					</motion.div>
					<motion.div
						id='map'
						ref={ref}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: isMobile ? 0.2 : 0.35, duration: 0.3 }}
						viewport={{ once: true }}
						className='row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-1 flex items-center justify-center relative'
					>
						<img className='w-11 z-[2]' src={face} alt='memoji' />
						<div className='w-24 h-24 bg-[#98d0ff] absolute z-[1] rounded-full bg-opacity-30 border-2 border-white animate__animated animate__pulse animate__infinite infinite animate__fast' />
						<AnimatePresence>
							{hovering && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='w-full h-10 backdrop-blur-sm absolute left-0 bottom-0 z-[2] flex items-center justify-center text-left text-opacity-70'
								>
									<span className='text-xs font-medium'>
										From Córdoba, MX 🇲🇽
									</span>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</section>
				<header className='w-full flex flex-col gap-2 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: isMobile ? 0 : 0.4, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
						Projects
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: isMobile ? 0 : 0.5, duration: 0.3 }}
						viewport={{ once: true }}
						className='opacity-70'
					>
						Here are some projects I've worked on in the past few years.
					</motion.p>
				</header>
				<section className='w-full grid auto-rows-[380px] lg:auto-rows-[140px] grid-cols-8 gap-4'>
					{Projects.map((project: IProjectCard) => {
						return <ProjectCard {...project} />
					})}
				</section>
				<header className='w-full flex flex-col gap-2 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
						Technologies
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='opacity-70'
					>
						These are some of the technologies I've worked with:
					</motion.p>
				</header>
				<section className='w-full h-40 max-w-5xl xl:max-w-7xl text-base'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						viewport={{ once: true }}
						className='w-full h-full relative inline-flex flex-nowrap bg-white dark:bg-raisin-black rounded-3xl items-center justify-between px-10 overflow-hidden'
					>
						<div className='absolute left-0 w-28 h-full bg-gradient-to-r from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
						<div className='absolute right-0 w-28 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
						<InfinityScroll />
					</motion.div>
				</section>
				<header className='w-full flex flex-col gap-2 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
						Experience
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0, duration: 0.3 }}
						viewport={{ once: true }}
						className='opacity-70'
					>
						I have worked for the following companies:
					</motion.p>
				</header>
				<section className='w-full grid auto-rows-[260px] grid-cols-8 gap-4'>
					{Experiences.map((experience: IExperienceCard) => (
						<ExperienceCard {...experience} />
					))}
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Home
