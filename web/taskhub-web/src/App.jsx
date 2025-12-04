// 路由与占位页面
// 懒加载页面，配合 Suspense 的加载态

import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './layout/AppLayout.jsx'

const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Users = lazy(() => import('./pages/Users.jsx'))
const Settings = lazy(() => import('./pages/Settings.jsx'))

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<Spin style={{ display: 'block', margin: '48px auto' }} />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </AppLayout>
  )
}

export default App
