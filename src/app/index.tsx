import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import { routing } from '../pages'

import './css/fonts.css'
import './css/normalize.css'
import './css/default.css'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider router={routing} />
  </React.StrictMode>,
)
