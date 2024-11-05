import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Entries from './pages/Entries';
import Home from './pages/Home';
import Submit from './pages/Submit';

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
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
