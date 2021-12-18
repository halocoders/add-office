import Overview from './pages/Overview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OfficePage from './pages/OfficePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div id="App" className="container mx-auto mb-14">
      <Router>
        <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route path="/office/:company" element={<OfficePage />} />
          <Route path="" component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
