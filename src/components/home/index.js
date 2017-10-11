import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h1>Home Page</h1>
        <Link to="/container/0" className="primary-nav__button">InVen</Link>
    </div>
)

export default Home;