import { useState } from 'react'
import { format } from 'date-fns'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

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
            opacity: 0,
            scale: 0.9,
            backgroundColor: isPast
              ? 'var(--color-past)' // Past stays muted
              : isToday
                ? 'var(--color-present)' // Today stays primary color
                : 'var(--color-future)' // Start with dark for future days
          }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: isToday
              ? 'var(--color-present)' // Today stays primary color
              : isPast
                ? 'var(--color-past)' // Past stays muted
                : 'var(--color-future)' // Future days gradually lighten
          }}
          transition={{
            duration: 7,
            delay: index * 0.02, // Gradual reveal animation
            ease: 'easeOut',
            backgroundColor: {
              duration: 2, // Smooth color change for future days
              ease: 'easeInOut'
            }
          }}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>{format(date, 'MMMM d, yyyy')}</p>
      </TooltipContent>
    </Tooltip>
  )
}
