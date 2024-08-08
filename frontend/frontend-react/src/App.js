import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
        <Routes>
        <Route path="/login" element={<Login />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
