import { createBrowserRouter } from 'react-router-dom'
import {Home} from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { DashBoard } from './pages/dashboard'
import { CarsDetails } from './pages/cars'
import { NewDashBoard } from './pages/dashboard/new'

import { Layout } from './components/layouts'


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'car/:id',
      element: <CarsDetails />
    },
    {
      path: '/dashboard',
      element: <DashBoard />
    },
    {
      path:'/dashboard/new',
      element: <NewDashBoard />
    },
  ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])
