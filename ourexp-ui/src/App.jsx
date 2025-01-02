import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Entries from './pages/Entries';
import Home from './pages/Home';
import Submit from './pages/Submit';
import Account from './pages/Account';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/entries/:feeling",
      element: <Entries />,
    },
    {
      path: "/submit",
      element: <Submit />,
    },
    {
      path: "/account",
      element: <Account />,
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
