import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Box from './Box'
import Schedule from './shedule'
import Confirmation  from './confirmation';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/confirmation" element={<Confirmation />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
