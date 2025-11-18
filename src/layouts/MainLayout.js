import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotHiringModal from '../components/NotHiringModal';

// Pass down modal state and handlers from App.js
function MainLayout({ isHiringModalOpen, handleOpenHiringModal, handleCloseHiringModal }) {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        {/* The Outlet will render the matched route's component (e.g., HomePage, AboutPage) */}
        <Outlet />
      </main>
      <Footer onOpenHiringModal={handleOpenHiringModal} />
      <NotHiringModal isOpen={isHiringModalOpen} onClose={handleCloseHiringModal} />
    </div>
  );
}

export default MainLayout;