import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../creators/photosCreators';

import './PaginationComponent.scss';

const PaginationComponent = (props) => {
  const [currentPage, updateCurrentPage] = useState(1);
  const { query, totalPages, searchPhotos } = props;
  let totalPagesArray = [];

  for (let i = 1; i < totalPages + 1; i++) {
    totalPagesArray.push(i);
  }

  const searchForCurrentPage = (page) => {
    updateCurrentPage(page);
    searchPhotos(query, page);
  }

  return (
    <div className="pagination-results">
      {totalPagesArray.map(element => {
        return (
          <span key={element}>
            <button
              type="button"
              className={element === currentPage ? 'pagination-results__current-page' : ''}
              onClick={ () => {searchForCurrentPage(element)} }>
                {element}
            </button>
           </span>
        )
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { totalPages, query } = state.photos;
  return { totalPages, query };

}

const mapDispatchToProps = (dispatch) => {
  return {
    searchPhotos: (query, page) => {
      dispatch(fetchPhotos(query, page))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);
