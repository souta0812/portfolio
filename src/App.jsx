import { Routes, Route } from 'react-router-dom';
import TitlePage from './pages/TitlePage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import ConnectPage from './pages/ConnectPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TitlePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/connect" element={<ConnectPage />} />
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}

export default App;
