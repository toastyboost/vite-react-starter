import * as React from 'react'
import { Outlet } from 'react-router-dom'

export function StocksPage() {
  return (
    <div>
      <h1>stocks</h1>
      <Outlet />
    </div>
  )
}
