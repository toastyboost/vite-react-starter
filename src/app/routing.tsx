import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Root } from '~/pages/root'
import { ErrorPage } from '~/pages/error'
import { StocksPage } from '~/pages/stocks'
import { TickerPage } from '~/pages/stocks/ticker'
import { path } from './path'

export const routing = createBrowserRouter([
  {
    path: path.root,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: path.stocks.entry,
        element: <StocksPage />,
        children: [
          {
            path: path.stocks.ticker(':ticker'),
            element: <TickerPage />,
          },
        ],
      },
    ],
  },
])
