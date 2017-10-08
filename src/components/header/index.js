import React from 'react'
import { Link } from 'react-router-dom'

import './site-header.css'
import './primary-nav.css'

const SiteHeader = () => (
    <header className="site-header">
        <div className="wrapper">
            <nav className="primary-nav primary-nav--pull-right">
                <ul>
                    <li>
                        <Link to="/" className="primary-nav__button">Home</Link>
                    </li>
                    <li>
                        <Link to="/containers" className="primary-nav__button">View Containers</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default SiteHeader;