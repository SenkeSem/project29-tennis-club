import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NewsPage from './pages/NewsPage/NewsPage';
import СontactsPage from './pages/СontactsPage/СontactsPage';
import ServicePage from './pages/ServicePage/ServicePage';
import ChildrenPage from './pages/ChildrenPage/ChildrenPage';
import PricePage from './pages/PricePage/PricePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';

import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contacts" element={<СontactsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/children" element={<ChildrenPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
