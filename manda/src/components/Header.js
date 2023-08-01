import React, { useState } from 'react';
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