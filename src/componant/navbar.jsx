import React, {Component} from 'react';

export default class Navbar extends Component {
    state = {}

    render() {
        return <nav className="navbar navbar-dark bg-dark mb-3">
            <div className="container">
            <span className="navbar-brand">Navbar</span>
            </div>
        </nav>;
    }
}