import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage/LocationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="locations" element={<LocationsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
