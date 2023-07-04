import React, { useState } from 'react'
import './Header.css'

const Header = () =>{
    const [Toggle, showMenu] = useState(false);
    return(
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav-logo'>Aditi</a>
                <div className={Toggle ? 'nav-menu show-menu': 'nav-menu'}>
                    <ul className='nav-list grid'>
                        <li className='nav-item'>
                            <a href="#home" className='nav-link active-link'>
                                <i className='uil uil-estate nav-icon'></i>Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about" className='nav-link'>
                                <i className='uil uil-user nav-icon'></i>About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#myart" className='nav-link'>
                                <i className='uil uil-illustration nav-icon'></i>My art
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" className='nav-link'>
                                <i className='uil uil-message nav-icon'></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times nav-close' onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className='nav-toggle' onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}
export default Header