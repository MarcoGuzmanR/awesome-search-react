import { RECEIVE_PHOTO_STATS } from '../actions/actions'

const initialState = {
  totalDownloads: null,
  totalViews: null,
  totalLikes: null
};

const receivePhotoStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PHOTO_STATS:
      return Object.assign({}, state, {
        totalDownloads: action.totalDownloads,
        totalViews: action.totalViews,
        totalLikes: action.totalLikes
      });
    default:
      return state;
  }
}

export default receivePhotoStatsReducer;
