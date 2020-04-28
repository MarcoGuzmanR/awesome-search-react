import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPhotoStats } from '../../creators/photoCreators';

import './PhotoStatsComponent.scss';

const PhotoStatsComponent = (props) => {
  const { id, getStats } = props
  const { totalDownloads, totalViews, totalLikes } = props;

  useEffect(() => {
    getStats(id);
  }, []);

  return (
    <div className="app-results__photo-stats">
      <p>Downloads: {totalDownloads}</p>
      <p>Views: {totalViews}</p>
      <p>Likes: {totalLikes}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  const stats = state.photoStats;
  const { totalDownloads, totalViews, totalLikes } = stats;

  return { totalDownloads, totalViews, totalLikes };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStats: (id) => {
      dispatch(fetchPhotoStats(id))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoStatsComponent);
