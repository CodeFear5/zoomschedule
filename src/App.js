import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Box from './Box'
import Schedule from './shedule'
import Confirmation  from './confirmation';
import Upcomingmeeting from './upcomingmeeting'
import Activities from './activities'
import Navbar from './navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/upcoming" element={<Upcomingmeeting />} />
          <Route path="/activities" element={<Activities />} />



          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
