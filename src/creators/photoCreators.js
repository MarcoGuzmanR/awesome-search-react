import { API_PHOTO_URL } from '../configs/url.js';

import {
  RECEIVE_PHOTO_STATS,
  SHOW_ERRORS,
  IS_LOADING } from '../actions/actions'

const receivePhotoStats = (stats) => {
  return {
    type: RECEIVE_PHOTO_STATS,
    totalDownloads: stats.downloads.total,
    totalViews: stats.views.total,
    totalLikes: stats.likes.total
  }
}

const isLoading = (loading) => {
  return {
    type: IS_LOADING,
    isLoading: loading
  }
}

export const showError = (hasError) => {
  return {
    type: SHOW_ERRORS,
    hasError
  }
}

export const fetchPhotoStats = (id) => {
  return async dispatch => {

    try {
      const response = await fetch(`${API_PHOTO_URL}/${id}/statistics`, {
        method: 'GET',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
        }
      })

      const results = await response.json();

      dispatch(receivePhotoStats(results));
    }
    catch (error) {
      dispatch(showError(true))
    }
  }
}
