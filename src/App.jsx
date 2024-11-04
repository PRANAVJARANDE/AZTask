import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import Upskill from './Components/Upskill.jsx';
import { useSelector, useDispatch } from 'react-redux';

const Dashboard = () => <div>Dashboard Page</div>;
const Learn = () => <div>Learn Page</div>;
const Forums = () => <div>Forums Page</div>;
const Contest = () => <div>Contest Page</div>;
const Leaderboard = () => <div>Leaderboard Page</div>;

function App() {
  const sidebaroption = useSelector(state => state.sidebar);
  return (
    <Router>
      <header>
        <Header/>
      </header>
      <div className="flex bg-blue-50">
      {sidebaroption && (
          <div className="fixed top-0 left-0 h-full bg-white shadow-md z-10">
            <Sidebar />
          </div>
        )}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Upskill />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;