import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Albums from './routes/Album/Albums'
import Album from './routes/Album/Album'
import User from './routes/User/User'
import Layout from './routes/Layout/Layout'
import Users from './routes/User/Users'
import Error from './routes/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'albums',
        element: <Albums />,
      },
      {
        path: 'albums/:id/:userId',
        element: <Album />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/:id',
        element: <User />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
