import {
  RECEIVE_PHOTOS,
  SET_QUERY,
  SHOW_SEARCH_ERRORS,
  SHOW_API_ERRORS,
  IS_LOADING } from '../actions/actions'

const initialState = {
  photos: null,
  query: '',
  totalResults: null,
  totalPages: null,
  hasSearchErrors: false,
  hasApiErrors: false,
  isLoading: false,
};

const receivePhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, {
        photos: action.photos,
        totalResults: action.totalResults,
        totalPages: action.totalPages,
      });
    case SET_QUERY:
      return Object.assign({}, state, {
        query: action.query,
      });
    case SHOW_SEARCH_ERRORS:
      return Object.assign({}, state, {
        hasSearchErrors: action.hasSearchErrors,
      });
    case SHOW_API_ERRORS:
      return Object.assign({}, state, {
        hasApiErrors: action.hasApiErrors,
      });
    case IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    default:
      return state;
  }
}

export default receivePhotosReducer;
