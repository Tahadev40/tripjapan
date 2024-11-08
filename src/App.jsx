import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Dynamically import pages with React.lazy
const HomePage = React.lazy(() => import('./pages/HomePage'));
// Import other pages dynamically as needed
// const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}> {/* This shows while the component is loading */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add Routes for other pages here */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
