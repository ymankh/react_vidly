import React, {Component} from 'react';


export default class GeneraFilter extends Component {
    state = {}
    allGenresClassRenderer = () => {
        let theClass = "list-group-item clickable"
        if (!this.props.currentGenre)
            theClass += " active"
        return theClass
    }
    genreClassRenderer = (genre) => {
        let theClass = "list-group-item clickable"
        if (this.props.currentGenre === genre)
            return theClass += " active"
        return theClass
    }

    render() {
        const {genresList, onChoosingGenre} = this.props
        return (<div className="col-2">
            <ul className="list-group">
                <li className={this.allGenresClassRenderer()}
                    onClick={() => onChoosingGenre(false)}>All movies
                </li>
                {genresList.map(genre => <li key={genre.name}
                                             className={this.genreClassRenderer(genre)}
                                             onClick={() => onChoosingGenre(genre)}>{genre.name}</li>)}
            </ul>
        </div>);
    }
}