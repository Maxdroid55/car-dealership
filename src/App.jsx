import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cars from './components/Cars';
import Layout from './components/Layout';
import './styles/App.css'

import './server'

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cars' element={<Cars />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;