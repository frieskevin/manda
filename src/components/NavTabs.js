import React from "react";

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs justify-content-end float'>
            <li className='nav-item'>
                <a href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
            </li>
            <li className='nav-item'>
                <a href='#appointments'
                    onClick={() => handlePageChange('Appointments')}
                    className={currentPage === 'Appointments' ? 'nav-link active' : 'nav-link'}>
                        Appointments
                    </a>
            </li>
            <li className='nav-item'>
                <a href='#education'
                    onClick={() => handlePageChange('Education')}
                    className={currentPage === 'Education' ? 'nav-link active' : 'nav-link'}>
                        Education
                    </a>
            </li>
            <li className='nav-item'>
                <a href='#recommendations'
                    onClick={() => handlePageChange('Recommendations')}
                    className={currentPage === 'Recommendations' ? 'nav-link active' : 'nav-link'}>
                        Recommendations
                    </a>
            </li>
            
        </ul>
    )
}