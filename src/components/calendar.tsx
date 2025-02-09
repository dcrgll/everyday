'use client'

import React, { useMemo, useState } from 'react'
import { getDayOfYear, getDaysInYear, isBefore } from 'date-fns'

import { TooltipProvider } from '@/components/tooltip'

import Day from './day'
import DaysLeft from './days_left'

export default function YearDotGrid() {
  const [currentYear] = useState(new Date().getFullYear())

  const { daysLeft, days, gridColumns } = useMemo(() => {
    const today = new Date()

    const totalDays = getDaysInYear(new Date(currentYear, 0, 1))
    const daysPassed = getDayOfYear(today) // Correctly get the day of the year
    const daysLeft = totalDays - daysPassed // Fix the calculation

    const gridColumns = Math.ceil(Math.sqrt(totalDays))

    const days = Array.from({ length: totalDays }, (_, index) => {
      const currentDate = new Date(currentYear, 0, index + 1)
      const isPast = isBefore(currentDate, today)
      const isToday = currentDate.toDateString() === today.toDateString()
      return { date: currentDate, isPast, isToday }
    })

    return { totalDays, daysLeft, days, gridColumns }
  }, [currentYear])

  return (
    <TooltipProvider>
      <div className="mx-auto flex max-w-sm flex-col items-center justify-center p-8">
        <div
          className="grid place-items-center gap-2"
          style={{
            gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
            aspectRatio: '1 / 1'
          }}
        >
          {days.map(({ date, isPast, isToday }, index) => (
            <Day
              key={index}
              date={date}
              isPast={isPast}
              index={index}
              isToday={isToday}
              year={currentYear}
            />
          ))}
        </div>
        <DaysLeft daysLeft={daysLeft} />
      </div>
    </TooltipProvider>
  )
}
