'use client'

import { useEffect, useState } from 'react'

import { fetchCounterData, formatNumber } from './helpers'

export default function Counter() {
  const [visitCount, setVisitCount] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCounterData()
      setVisitCount(data)
    }
    fetchData()
  }, [])

  const loading = visitCount === null

  if (loading || visitCount === undefined) {
    return null
  }

  return (
    <div className="flex items-center gap-1">
      <p className="text-[10px]">{formatNumber(visitCount)} visits</p>
    </div>
  )
}
