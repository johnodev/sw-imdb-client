import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import MovieDetail from './MovieDetail';
import { requestApiData, sortChronological, sortMachete, sortEpisode } from '../actions';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.sortChronological = this.sortChronological.bind(this);
    this.sortMachete = this.sortMachete.bind(this);
    this.sortEpisode = this.sortEpisode.bind(this);
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    const movieList = Array.concat(this.props.movieList);
    return (
      <div>
        <div className="text-right">
          <ButtonGroup>
            <Button
              className="btn-primary"
              onClick={this.sortChronological}>Sort Year</Button>
            <Button
              className="btn-info"
              onClick={this.sortEpisode}>Sort Episode</Button>
            <Button
              className="btn-success"
              onClick={this.sortMachete}>Sort Machete</Button>
          </ButtonGroup >
        </div>
        <hr />
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>IMBD Id</th>
              <th>Year</th>
              <th>Title</th>
              <th>Characters</th>
              <th>Cover</th>
            </tr>
          </thead>
          <tbody>
            {
              movieList.map((movie, index) => {
                return <MovieDetail key={index} movie={movie} />
              })
            }
          </tbody>
        </Table>
      </div>
    )

  }

  sortChronological() {
    this.props.sortChronological();
  }

  sortMachete() {
    this.props.sortMachete();
  }

  sortEpisode() {
    this.props.sortEpisode();
  }

}

const mapStateToProps = state => ({ movieList: state.movieList });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, sortChronological, sortMachete, sortEpisode }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
