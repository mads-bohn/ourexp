import './App.css'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom'
import Entries from './pages/Entries';
import Home from './pages/Home';
import Submit from './pages/Submit';
import Account from './pages/Account';

function App() {

  return (
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='entries/:feelingId' element={<Entries />} />
          <Route path='submit' element={<Submit />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    
  )
}

export default App
