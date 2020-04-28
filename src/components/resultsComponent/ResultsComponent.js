import React from 'react';
import { connect } from 'react-redux';

import { SEARCH_CRITERIA } from '../../constants/searchCriteria';

import PhotoComponent       from '../photoComponent/PhotoComponent';
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
/* import PhotoStatsComponent  from '../photoStatsComponent/PhotoStatsComponent'; */
              /* <PhotoStatsComponent id={photo.id} /> */
import PaginationComponent  from '../paginationComponent/PaginationComponent';

import './ResultsComponent.scss';

const showResults = (props) => {
  const { photos, results, hasSearchErrors, hasApiErrors, isLoading } = props;

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  else {
    if (hasSearchErrors) {
      return (
        <div className="search-result--error">
          <p>Your search does not match with the '{SEARCH_CRITERIA}' criteria. Try again, please!</p>
        </div>
      )
    }
    else if (hasApiErrors) {
      return (
        <div className="search-result--error">
          <p>Something went wrong with your photos. Try again, please!</p>
        </div>
      )
    }
    else if (!hasSearchErrors && !hasApiErrors && photos !== null) {
      return (
        <div>
          <p className="app-results-total">{results} Results</p>
          {photos.map(photo => (
            <div key={photo.id} className="search-result-content">
              <PhotoComponent photo={photo} />
              <div className="search-result-content__information">
                <SocialMediaComponent user={photo.user} />
              </div>
            </div>
          ))}
          <PaginationComponent />
        </div>
      );
    }
  }
};

const ResultsComponent = (props) => {
  return (
    <div className="app-results">
      {showResults(props)}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { photos, totalResults: results, hasSearchErrors, hasApiErrors, isLoading } = state.photos;
  return { photos, results, hasSearchErrors, hasApiErrors, isLoading };
}

export default connect(mapStateToProps)(ResultsComponent);
