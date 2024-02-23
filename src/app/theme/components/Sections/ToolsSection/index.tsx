import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@uidotdev/usehooks'

import InfinityScroll from '@/app/theme/components/InfinityScroll/InfinityScroll.tsx'

const ToolsSection: FC = () => {
	const [isMobile, setIsMobile] = useState(false)
	const mobile = useMediaQuery('only screen and (max-width : 768px)')

	useEffect(() => {
		setIsMobile(mobile)
	}, [mobile])

	return (
		<section className='w-full h-40 max-w-5xl xl:max-w-7xl text-base'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: isMobile ? 0 : 0.1, duration: 0.5 }}
				viewport={{ once: true }}
				className='w-full h-full relative inline-flex flex-nowrap bg-white dark:bg-raisin-black rounded-3xl items-center justify-between px-10 overflow-hidden'
			>
				<div className='absolute left-0 w-28 h-full bg-gradient-to-r from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
				<div className='absolute right-0 w-28 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
				<InfinityScroll />
			</motion.div>
		</section>
	)
}

export default ToolsSection
