import React, {Component} from 'react'
import {getMovies} from "../fakeServices/allMovies";
import {getGenres} from "../fakeServices/fakeGenraServce";
import Like from "./like";
import Pagination from "./pagination";
import GeneraFilter from "./generaFilter";


export default class MoviesTable extends Component {
    constructor(props) {
        super(props);
        this.state.movies = getMovies();
        this.state.genres = [];
    }

    componentDidMount() {
        this.setState({genres: getGenres()});
    }

    state = {currentPage: 1, numOfMoviesBP: 10};
    countFrom = () => (this.state.currentPage - 1) * this.state.numOfMoviesBP;
    i = this.countFrom();
    resetCounter = () => {
        this.i = this.countFrom();
    }
    handleLike = (movie) => {
        let {movies} = this.state;
        movies = movies.map(m => {
                if (m._id === movie._id)
                    m.isLiked = !m.isLiked;
                return m;
            }
        )
        this.resetCounter();
        this.setState({movies});
    }
    deleteMovie = (id) => {
        this.resetCounter();
        this.setState({movies: this.state.movies.filter(movie => movie._id !== id)})
        // this.forceUpdate();
    }
    _movieRenderer = (movie) => {
        this.i++;
        return (
            <tr key={movie._id}>
                <th scope="row">{this.i}</th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like isLiked={movie.isLiked} onLike={() => this.handleLike(movie)} id={'like #' + movie._id}/></td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={() => {
                        this.deleteMovie(movie._id)
                    }
                    }>Delete
                    </button>
                </td>
            </tr>)
    }
    getFilteredMovies = () => {
        let {movies, currentGenre} = this.state;
        if (this.state.currentGenre) {
            return movies.filter(movie => movie.genre.name === currentGenre.name)
        }
        return movies
    }
    theMoviesInTheCurrentPage = () => {
        let {currentPage, numOfMoviesBP} = this.state;
        currentPage -= 1;
        const startFrom = currentPage * numOfMoviesBP;
        const endAt = startFrom + numOfMoviesBP;
        const movies = this.getFilteredMovies()
        return movies.slice(startFrom, endAt)
    }
    handleChangePage = (currentPage) => {
        this.setState({currentPage})
    }
    handleChoosingGenre = (genre) => {
        this.setState({currentGenre: genre, currentPage: 1})
    }

    render() {
        const {numOfMoviesBP, currentPage, genres, currentGenre} = this.state
        const movies = this.getFilteredMovies();
        this.resetCounter()
        return (
            <div className="row">
                <GeneraFilter genresList={genres} onChoosingGenre={this.handleChoosingGenre}
                              currentGenre={currentGenre}/>
                <div className="col-10">
                    <table className="table table-hover table-striped table-dark">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">genre</th>
                            <th scope="col">numberInStock</th>
                            <th scope="col">dailyRentalRate</th>
                            <th scope="col">Like</th>
                            <th scope="col"/>
                        </tr>
                        </thead>
                        <tbody>
                        {/* there is where the table of the movies is rendered*/}
                        {this.theMoviesInTheCurrentPage().map(this._movieRenderer)}
                        </tbody>
                    </table>
                    <Pagination numberOfElements={movies.length} elementPerPage={numOfMoviesBP}
                                currentPage={currentPage} onChangePage={this.handleChangePage}/>
                </div>
            </div>
        )
    }
}
