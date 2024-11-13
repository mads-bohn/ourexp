import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Entries from './pages/Entries';
import Home from './pages/Home';
import Submit from './pages/Submit';
import Profile from './pages/Profile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/entries",
      element: <Entries />,
    },
    {
      path: "/submit",
      element: <Submit />,
    },
    {
      path: "/profile",
      element: <Profile />,
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
