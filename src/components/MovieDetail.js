import React from 'react';
import PropTypes from 'prop-types';

export default class MovieDetail extends React.Component {
    render() {
        const movie = this.props.movie;

        return (
            <tr>
                <td>{movie.imdbId}</td>
                <td>{movie.Year}</td>
                <td>{movie.Title}</td>
                <td>{movie.Actors}</td>
                <td><img src={movie.Poster} className="img-responsive" alt={movie.Title} /></td>
            </tr>
        );
    }
}

MovieDetail.propTypes = {
    movie: PropTypes.object.isRequired
}