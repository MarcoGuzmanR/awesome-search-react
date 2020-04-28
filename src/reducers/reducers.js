import { combineReducers } from 'redux'
import receivePhotosReducer  from './photosReducer';
import receivePhotoStatsReducer from './photoStatsReducer';


const mainReducer = combineReducers({
  photos: receivePhotosReducer,
  photoStats: receivePhotoStatsReducer,
});

export default mainReducer;
