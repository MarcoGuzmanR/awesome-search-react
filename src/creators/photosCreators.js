import { API_SEARCH_URL } from '../configs/url.js';

import {
  RECEIVE_PHOTOS,
  SET_QUERY,
  SHOW_SEARCH_ERRORS,
  SHOW_API_ERRORS,
  IS_LOADING } from '../actions/actions'

// creators
const receivePhotos = (results) => {
  return {
    type: RECEIVE_PHOTOS,
    photos: results.results,
    totalResults: results.total,
    totalPages: results.total_pages,
  }
}

const isLoading = (loading) => {
  return {
    type: IS_LOADING,
    isLoading: loading
  }
}

const showApiErrors = (hasApiErrors) => {
  return {
    type: SHOW_API_ERRORS,
    hasApiErrors
  }
}

export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    query
  }
}

export const showSearchErrors = (hasSearchErrors) => {
  return {
    type: SHOW_SEARCH_ERRORS,
    hasSearchErrors
  }
}

export const fetchPhotos = (query, page = 0) => {
  return async dispatch => {
    dispatch(isLoading(true));

    try {
      const response = await fetch(`${API_SEARCH_URL}/?query=${query}&page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        }
      });

      const results = await response.json();

      if (results.errors) {
        throw new Error(results.errors);
      }

      dispatch(receivePhotos(results));
      dispatch(isLoading(false));
    }
    catch (error) {
      dispatch(showApiErrors(true));
      dispatch(isLoading(false));
    }
  }
}
