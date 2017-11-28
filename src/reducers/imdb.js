import { RECEIVE_API_DATA, SORT_CHRONOLOGICAL, SORT_MACHETE, SORT_EPISODE } from '../actions';

export default (state = {}, { type, data }) => {

  switch (type) {
    case RECEIVE_API_DATA:
      return data;

    case SORT_MACHETE:

      // lookup table - info also available movie.position.machete
      //                but missing from The Phantom Menace
      //                Alt solution - read from  movie.position.machete 
      //                                map missing machete number
      const macheTeMap = {
        'tt0076759': 0,
        'tt0080684': 1,
        'tt0120915': 2,
        'tt0121765': 3,
        'tt0121766': 4,
        'tt0086190': 5,
        'tt2488496': 6,
      }

      return state.slice().sort((a, b) => {
        return macheTeMap[a.imdbId] - macheTeMap[b.imdbId];
      });

    case SORT_CHRONOLOGICAL:

      return state.slice().sort((a, b) => {
        return a.Year - b.Year;
      });

    case SORT_EPISODE:

      return state.slice().sort((a, b) => {
        return a.position.episode - b.position.episode;
      });

    default:
      return state;
  }
};
