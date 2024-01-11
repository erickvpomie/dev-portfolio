import SunIcon from '../../icons/SunIcon.tsx'
import MoonIcon from '../../icons/MoonIcon.tsx'
import { GrCloudDownload } from 'react-icons/gr'
import { useThemeStore } from '../../../shared/stores/useThemeStore.ts'

const Header = () => {
	const toggleTheme = useThemeStore(state => state.toggleTheme)
	const theme = useThemeStore(state => state.theme)

	return (
		<header className='w-full overflow-x-hidden h-[5rem] flex justify-center dark:bg-dusky bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased'>
			<nav className='w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-7xl'>
				<div className='w-7 h-7 bg-dusky flex items-center justify-center dark:bg-moonlit p-4'>
					<span className='text-moonlit text-md font-semibold dark:text-dusky'>
						EP
					</span>
				</div>
				<div className='flex items-center gap-4'>
					{theme === 'light' ? (
						<button onClick={toggleTheme}>
							<MoonIcon className='w-6 h-6 fill-current text-[#2f3133] active:rotate-[360deg] transition-all duration-300' />
						</button>
					) : (
						<button onClick={toggleTheme}>
							<SunIcon className='w-6 h-6 fill-current text-sun-beam active:rotate-[360deg] transition-all duration-300' />
						</button>
					)}
					<a
						className='w-auto h-7 px-4 font-medium flex items-center gap-2 bg-dusky text-moonlit rounded-3xl dark:text-dusky dark:bg-moonlit lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-all duration-300'
						href='https://drive.google.com/file/d/1ngJF21D26ec6DMvgKtdmNBNxXIs-qZ90/view?usp=sharing'
						target='_blank'
					>
						<GrCloudDownload />
						<div className='flex items-center'>
							<span className='hidden lg:flex'>Download &nbsp;</span>
							<span>CV</span>
						</div>
					</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
