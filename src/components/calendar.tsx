'use client'

import React from 'react'
import { getDaysInYear, isBefore } from 'date-fns'

import { TooltipProvider } from '@/components/tooltip'

import Day from './day'

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
      <div className="mx-auto w-full max-w-sm p-8">
        <h1 className="mb-4 text-2xl font-bold">{currentYear}</h1>
        <div className="grid w-full grid-cols-12 gap-2 gap-y-3 text-center">
          {days.map(({ date, isPast }, index) => (
            <Day key={index} date={date} isPast={isPast} index={index} />
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
