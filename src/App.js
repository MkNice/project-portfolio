import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './dashboard/header/Header';
import Sidebar from './dashboard/sidebar/Sidebar';
import Content from './dashboard/content/Content';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/*" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
