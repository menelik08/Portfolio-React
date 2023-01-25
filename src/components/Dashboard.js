import React, { useState } from 'react';
import Header from './Header.js';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Footer from '../Footer/Footer'

 function Dashboard() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div className="homepage">
          {/* We are passing the currentPage from state and the function to update it */}
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
          <Footer/>
        </div>
      );
    }
    export default Dashboard;