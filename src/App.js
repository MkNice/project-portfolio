import './App.css';
import Header from './dashboard/header/Header';
import Sidebar from './dashboard/sidebar/Sidebar';
import Content from './dashboard/content/Content';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
