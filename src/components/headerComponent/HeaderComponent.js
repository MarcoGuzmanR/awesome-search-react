import React from 'react';

import { SEARCH_CRITERIA } from '../../constants/searchCriteria';

const HeaderComponent = () => {
  return (
    <div className="app-header">
      <h1>AwesomePhotoSearch</h1>
      <p>The best photo search on the web for {SEARCH_CRITERIA}</p>
    </div>
  )
}

export default HeaderComponent;
