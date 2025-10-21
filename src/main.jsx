import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import AppLayout from './AppLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorksPage from './pages/WorksPage'
import SkillsPage from './pages/SkillsPage'
import ConnectPage from './pages/ConnectPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />, // ホームページは独自のレイアウト
  },
  {
    element: <AppLayout />, // /about などは共通レイアウト(AppLayout)を使う
    children: [
      { path: '/about', element: <AboutPage /> },
      { path: '/works', element: <WorksPage /> },
      { path: '/skills', element: <SkillsPage /> },
      { path: '/connect', element: <ConnectPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

