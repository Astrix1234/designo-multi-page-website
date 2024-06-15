import { lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage/LocationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const WebDesignPage = lazy(() => import('./pages/WebDesignPage/WebDesignPage'));
const AppDesignPage = lazy(() => import('./pages/AppDesignPage/AppDesignPage'));
const GraphicDesignPage = lazy(
  () => import('./pages/GraphicDesignPage/GraphicDesignPage')
);

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="web-design" element={<WebDesignPage />} />
            <Route path="app-design" element={<AppDesignPage />} />
            <Route path="graphic-design" element={<GraphicDesignPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
