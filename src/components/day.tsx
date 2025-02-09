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
              ? 'var(--color-past)'
              : isToday
                ? 'var(--color-present)'
                : 'var(--color-future)'
          }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: isToday
              ? 'var(--color-present)'
              : isPast
                ? 'var(--color-past)'
                : 'var(--color-future)'
          }}
          transition={{
            duration: 7,
            delay: index * 0.02,
            ease: 'easeOut',
            backgroundColor: {
              duration: 2,
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
