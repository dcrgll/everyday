'use client'

import React, { useState } from 'react'
import { getDaysInYear, isBefore } from 'date-fns'

import { TooltipProvider } from '@/components/tooltip'

import Day from './day'

export default function YearDotGrid() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const today = new Date()

  const totalDays = getDaysInYear(new Date(currentYear, 0, 1))

  const days = Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(currentYear, 0, index + 1)
    const isPast = isBefore(currentDate, today)
    return { date: currentDate, isPast }
  })

  return (
    <TooltipProvider>
      <div className="mx-auto w-full max-w-sm p-8">
        {/* Year Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button
            className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold hover:bg-gray-300"
            onClick={() => setCurrentYear((prev) => prev - 1)}
          >
            ←
          </button>
          <h1 className="tex-xl">{currentYear}</h1>
          <button
            className="rounded bg-gray-200 px-3 py-1 text-sm font-semibold hover:bg-gray-300"
            onClick={() => setCurrentYear((prev) => prev + 1)}
          >
            →
          </button>
        </div>

        {/* Yearly Calendar Grid */}
        <div className="grid w-full grid-cols-12 gap-2 gap-y-4 text-center">
          {days.map(({ date, isPast }, index) => (
            <Day key={index} date={date} isPast={isPast} index={index} />
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
