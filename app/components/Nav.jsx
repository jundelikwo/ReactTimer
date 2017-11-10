import React from 'react'
import {Link, IndexLink} from 'react-router'

var Nav = ()=> {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Time App</li>
                    <li>
                        <IndexLink to="/" activeClassName="activeLink">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="activeLink">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/jundelikwo" target="_blank">Jonathan Undelikwo</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

module.exports = Nav;