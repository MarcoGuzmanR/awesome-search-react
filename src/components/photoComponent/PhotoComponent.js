import React from 'react';

import './PhotoComponent.scss';

const PhotoComponent = (photoObj) => {
  return (
    <div className="search-result-content__photo">
      <img src={photoObj.photo.urls.regular} alt="" />
    </div>
  );
}

export default PhotoComponent;
