import { Home } from './pages'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

const isDev = process.env.NODE_ENV === 'development'

function App() {
  return (
    <BrowserRouter basename={isDev ? '/' : '/usagi'}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
