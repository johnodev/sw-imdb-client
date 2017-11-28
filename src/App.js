import React from 'react';
import { Provider } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import store from './store';
import MovieList from './components/MovieList';

export default () =>
  <Provider store={store}>
    <div className="container">
      <div>
        <Jumbotron className="text-center">          
          <h1 className="display-3">Star Wars</h1>
          <p>Choose your sort order.</p>
        </Jumbotron>
      </div>
      <MovieList />
    </div>
  </Provider>;
