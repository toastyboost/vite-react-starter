import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from '../shared/ui/atoms'
import { path } from '../app/path'

export function Root() {
  return (
    <div>
      <div>
        <Link to={path.root}>root</Link>
        <br />
        <Link to={path.stocks.ticker('MOEX')}>MOEX</Link>
      </div>
      <Outlet />
    </div>
  )
}
