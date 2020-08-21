import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import SearchInput from '../SearchInput/SearchInput';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header-left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__header-right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Googl" />
                <div className="home__search-input">
                    <SearchInput />
                </div>
            </div>
        </div>
    )
}

export default Home;
