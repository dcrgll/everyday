import { useState } from 'react'
import { formatDate } from 'date-fns'

import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

export default function Day({
  date,
  isPast,
  index
}: {
  date: Date
  isPast: boolean
  index: number
}) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  return (
    <Tooltip key={index} open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
      <TooltipTrigger className="flex items-center justify-center" asChild>
        <button
          className={`flex h-1 w-1 justify-center rounded-full sm:h-2 sm:w-2 ${isPast ? 'bg-foreground-muted dark:bg-border-hover' : 'bg-border-hover dark:bg-foreground-muted'}`}
          onClick={() => setIsTooltipOpen(!isTooltipOpen)}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>{formatDate(date, 'MMMM d, yyyy')}</p>
      </TooltipContent>
    </Tooltip>
  )
}
