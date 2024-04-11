import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <div className='page'>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />  
          <Route 
            path="/dashboard"
            element={<Dashboard />}
            />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
