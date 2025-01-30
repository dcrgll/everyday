'use client'

import React, { useMemo, useState } from 'react'
import { getDaysInYear, isBefore } from 'date-fns'

import { TooltipProvider } from '@/components/tooltip'

import Day from './day'
import Footer from './footer'

export default function YearDotGrid() {
  const [currentYear] = useState(new Date().getFullYear())

  const { daysLeft, days, gridColumns } = useMemo(() => {
    const today = new Date()

    const totalDays = getDaysInYear(new Date(currentYear, 0, 1))
    const daysLeft = totalDays - today.getDate()
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

        <Footer daysLeft={daysLeft} />
      </div>
    </TooltipProvider>
  )
}
