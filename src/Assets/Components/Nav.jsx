import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/';
import LibraryLogo from '../Assets/Library.svg'

const Nav = () => {
    return (
        <nav>
            <div className='nav__container'>
               <a href="/">
            <img src={LibraryLogo} alt="" className="logo" />
            </a>
            <ul className="Nav__links">
                <li className="nav__list">
                    <a href="/" className="nav__link">
                    Home
                    </a> 
                    </li> 
                    <li className="nav__list">
                    <a href="/" className="nav__link">
                    Books
                    </a> 
                    </li> 
                    <button className='btn__menu'>
                        <FontAwesomeIcon icon='bars'/>
                    </button>
                     </ul>
                     </div>
        </nav>
    )
}