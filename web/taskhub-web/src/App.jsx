// 路由与占位页面
// 懒加载页面，配合 Suspense 的加载态

import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Spin } from 'antd'

import AppLayout from './components/common/Layout/index.jsx'

const Dashboard = lazy(() => import('./pages/Dashboard/index.jsx'))
const Users = lazy(() => import('./pages/Users/index.jsx'))
const Settings = lazy(() => import('./pages/Settings.jsx'))
const TaskSquare = lazy(() => import('./pages/TaskSquare/index.jsx'))
const Statistics = lazy(() => import('./pages/Statistics/index.jsx'))

function App() {
  return (
    <AppLayout>
      <Suspense fallback={<Spin style={{ display: 'block', margin: '48px auto' }} />}>
        <Routes>
          <Route path="/" element={<Navigate to="/task-square" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/task-square" element={<TaskSquare />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </AppLayout>
  )
}

export default App
