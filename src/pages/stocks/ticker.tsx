import * as React from 'react'
import { useParams } from 'react-router-dom'

export function TickerPage() {
  const params = useParams()
  return <div>ticker: {JSON.stringify(params)}</div>
}
