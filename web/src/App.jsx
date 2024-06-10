import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Docs from './pages/docs';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className=''>
        <Routes>
          <Route path='/' element={<> <Home /> </>} />
          <Route path='/docs' element={<> <Docs /> </>} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;