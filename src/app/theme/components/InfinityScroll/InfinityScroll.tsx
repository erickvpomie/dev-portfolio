import { DevTools } from '../../../shared/utils/global-utils.ts'
import { IDevToolsElement } from '../../../shared/models/global-interface.ts'

const InfinityScroll = () => {
	return (
		<div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
			<ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
				{DevTools.map((tool: IDevToolsElement) => {
					return (
						<li key={tool.id} className='mx-8'>
							<img
								className={`w-14 h-14 grayscale object-fill hover:grayscale-0 ${tool?.className}`}
								src={tool.icon}
								alt={tool.name}
								title={tool.name}
							/>
						</li>
					)
				})}
			</ul>
			<ul
				className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
				aria-hidden='true'
			>
				{DevTools.map((tool: IDevToolsElement) => {
					return (
						<li key={tool.id} className='mx-8'>
							<img
								className={`w-14 h-14 grayscale object-fill hover:grayscale-0 ${tool?.className}`}
								src={tool.icon}
								alt={tool.name}
								title={tool.name}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default InfinityScroll
