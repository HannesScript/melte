import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Docs from './pages/docs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<><h1>Home</h1></>} />
          <Route path='/docs' element={<> <Docs /> </>} />
          <Route path='/components' element={<><h1>Components</h1></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;