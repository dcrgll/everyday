'use client'

import { getDayOfYear, getDaysInYear, isBefore } from 'date-fns'
import { useMemo } from 'react'

import { TooltipProvider } from '@/components/tooltip'

import Day from './day'
import DaysLeft from './days-left'

export default function YearDotGrid() {
	const currentYear = new Date().getFullYear()

	const { daysLeft, days, gridColumns } = useMemo(() => {
		const today = new Date()

		const totalDays = getDaysInYear(new Date(currentYear, 0, 1))
		const daysPassed = getDayOfYear(today)
		const remainingDays = totalDays - daysPassed

		const columnCount = Math.ceil(Math.sqrt(totalDays))

		const calendarDays = Array.from({ length: totalDays }, (_, index) => {
			const currentDate = new Date(currentYear, 0, index + 1)
			const isPast = isBefore(currentDate, today)
			const isToday = currentDate.toDateString() === today.toDateString()
			return { date: currentDate, isPast, isToday }
		})

		return {
			days: calendarDays,
			daysLeft: remainingDays,
			gridColumns: columnCount
		}
	}, [currentYear])

	return (
		<TooltipProvider>
			<div className='mx-auto flex max-w-sm flex-col items-center justify-center p-8'>
				<div
					className='grid place-items-center gap-2'
					style={{
						aspectRatio: '1 / 1',
						gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`
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
