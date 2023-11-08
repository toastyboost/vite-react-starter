import * as React from 'react'

import { Link as RouterLink } from 'react-router-dom'

type Props = {
  to: string
  children: React.ReactNode
}

export const Link = ({ children, to }: Props) => {
  return <RouterLink to={to}>{children}</RouterLink>
}
