import React, { useState } from 'react';
import Appointments from './Appointments';
import Education from './Education';
import Recommendations from './Recommendations';
import About from './About';
import NavTabs from './NavTabs';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'Appointments') {
            return <Appointments />
        }
        if (currentPage === 'Education') {
            return <Education />
        }
        if (currentPage === 'Recommendations') {
            return <Recommendations />
        }
        if (currentPage === 'About') {
            return <About />
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div className='container position-relative bgjet textyg'>
            <h1 className='bgyg textjet header'>Manda Ziegelman</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}