import { format } from 'date-fns'
import { motion } from 'motion/react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

function getBackgroundColor(isPast: boolean, isToday: boolean) {
	if (isToday) {
		return 'var(--color-present)'
	}

	if (isPast) {
		return 'var(--color-past)'
	}

	return 'var(--color-future)'
}

export default function Day({
	date,
	isPast,
	isToday,
	index,
	year
}: {
	date: Date
	isPast: boolean
	isToday: boolean
	index: number
	year: number
}) {
	const [isTooltipOpen, setIsTooltipOpen] = useState(false)
	const backgroundColor = getBackgroundColor(isPast, isToday)

	return (
		<Tooltip
			key={`${year}-${index}`}
			open={isTooltipOpen}
			onOpenChange={setIsTooltipOpen}
		>
			<TooltipTrigger asChild>
				<motion.button
					className={cn(
						'bg-background flex h-3 w-3 items-center justify-center rounded-full transition-colors duration-1000',
						isPast && 'bg-foreground-muted dark:bg-border-hover',
						isToday && 'bg-primary! dark:bg-primary!'
					)}
					onClick={() => setIsTooltipOpen(!isTooltipOpen)}
					initial={{
						backgroundColor,
						opacity: 0,
						scale: 0.9
					}}
					animate={{
						backgroundColor,
						opacity: 1,
						scale: 1
					}}
					transition={{
						backgroundColor: {
							duration: 2,
							ease: 'easeInOut'
						},
						delay: index * 0.02,
						duration: 7,
						ease: 'easeOut'
					}}
				/>
			</TooltipTrigger>
			<TooltipContent>
				<p>{format(date, 'MMMM d, yyyy')}</p>
			</TooltipContent>
		</Tooltip>
	)
}
