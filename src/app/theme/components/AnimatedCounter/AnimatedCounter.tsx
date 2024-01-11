import { useEffect, useRef } from 'react'
import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useTransform,
} from 'framer-motion'

type CounterProps = {
	from: number
	to: number
	className?: string
}

function AnimatedCounter({ from, to, className }: CounterProps) {
	const count = useMotionValue(from)
	const rounded = useTransform(count, latest => {
		return Math.round(latest)
	})
	const ref = useRef(null)
	const inView = useInView(ref)

	// while in view animate the count
	useEffect(() => {
		if (inView) {
			animate(count, to, { duration: 1, delay: 0.5 })
		}
	}, [count, inView, to])

	return (
		<motion.span className={className} ref={ref}>
			{rounded}
		</motion.span>
	)
}

export { AnimatedCounter }
