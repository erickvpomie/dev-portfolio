import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'

import { GoHeartFill } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'

const Footer = () => {
	const { t } = useTranslation('global')
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='w-full h-40 flex flex-col items-start justify-center max-w-5xl px-5 xl:max-w-6xl text-base'
		>
			<div className='w-full h-full bg-white dark:bg-raisin-black rounded-3xl flex items-center justify-between px-10'>
				<div className='flex flex-col items-start opacity-50 max-w-[50%] lg:max-w-fit'>
					<p>© 2024 Erick Pomié. {t('others-translations.copy-right')}</p>
					<p className='items-center gap-2 hidden lg:flex'>
						Made with love <GoHeartFill /> and React
					</p>
				</div>
				<div className='flex flex-col-reverse gap-3 items-end'>
					<p className='opacity-50 hidden lg:flex'>
						{t('others-translations.last-update')}
					</p>
					<div className='flex items-center gap-2 text-xl'>
						<a
							className='flex items-center font-medium'
							href='mailto:erickvpomie@gmail.com'
							title='Email me'
						>
							<MdAlternateEmail />
						</a>
						<a
							className='flex items-center font-medium'
							href='https://www.linkedin.com/in/erickvpomie/'
							target='_blank'
							rel='noreferrer'
							title='LinkedIn'
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer
