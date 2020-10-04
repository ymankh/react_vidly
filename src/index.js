import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MoviesTable from "./componant/moviesTable";
import Navbar from "./componant/navbar";
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/css/font-awesome.css.map'
import "./App.css"

ReactDOM.render(
    <Fragment>
        <Navbar/>
        <main className="container">
            <MoviesTable/>
        </main>
    </Fragment>
    ,
    document.getElementById('root')
);

serviceWorker.register();