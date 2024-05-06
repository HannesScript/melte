import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className='bg-gray-600 p-0 m-0 text-white'>
          <Navbar />
          <Routes>
            <Route path='/' element={<><h1>Home</h1></>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;