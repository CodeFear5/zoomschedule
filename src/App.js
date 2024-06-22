import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Schedule from './shedule';
import Confirmation from './confirmation';
import Upcomingmeeting from './upcomingmeeting';
import Activities from './activities';
import Navbar from './navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/upcoming" element={<Upcomingmeeting />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
