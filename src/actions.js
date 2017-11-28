export const REQUEST_API_DATA = 'REQUEST_API_DATA';
export const requestApiData = () => ({ type: REQUEST_API_DATA });

export const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const SORT_CHRONOLOGICAL = 'SORT_CHRONOLOGICAL';
export const sortChronological = () => ({ type: SORT_CHRONOLOGICAL });

export const SORT_MACHETE = 'SORT_MACHETE';
export const sortMachete = () => ({ type: SORT_MACHETE });

export const SORT_EPISODE = 'SORT_EPISODE';
export const sortEpisode = () => ({ type: SORT_EPISODE });

