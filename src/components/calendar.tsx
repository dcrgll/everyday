'use client'

import React from 'react'
import { format, getDaysInYear, isBefore } from 'date-fns'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/tooltip'

export default function YearDotGrid() {
  const currentYear = new Date().getFullYear()
  const totalDays = getDaysInYear(new Date(currentYear, 0, 1))
  const today = new Date()

  const days = Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(currentYear, 0, index + 1)
    const isPast = isBefore(currentDate, today)
    return { date: currentDate, isPast }
  })

  return (
    <TooltipProvider>
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-4 text-2xl font-bold">{currentYear}</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] gap-2">
          {days.map(({ date, isPast }, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <div
                  className={`h-2 w-2 rounded-full ${isPast ? 'bg-border-hover' : 'bg-foreground-muted'}`}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{format(date, 'MMMM d, yyyy')}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
