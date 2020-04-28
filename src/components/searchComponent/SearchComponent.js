import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SEARCH_CRITERIA } from '../../constants/searchCriteria';

import '../../App.scss';
import './SearchComponent.scss';

import { fetchPhotos, setQuery, showSearchErrors } from '../../creators/photosCreators';

const SearchComponent = (props) => {
  const { searchPhotos, setQueryFromSearch, showSearchCriteriaErrors } = props;
  const [query, updateQuery] = useState('');

  const submitSearch = () => {
    let validatedQuery = query.toLowerCase().includes(SEARCH_CRITERIA);

    if (validatedQuery) {
      showSearchCriteriaErrors(false);
      setQueryFromSearch(SEARCH_CRITERIA);
      searchPhotos(SEARCH_CRITERIA);
    }
    else {
      showSearchCriteriaErrors(true);
    }
  }

  return (
    <div className="app-input">
      <input type="text" onChange={event => updateQuery(event.target.value)} value={query} />
      <button onClick={() => { submitSearch() }}>Search</button>
    </div>
  )
}

// class SearchComponent extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       query: '',
//     };
//   }
//
//   updateValue(event) {
//     this.setState({query: event.target.value});
//   }
//
//   render () {
//     const { query } = this.state;
//     const { searchPhotos } = this.props;
//
//     return(
//       <div className="app-input">
//         <input type="text" onChange={event => this.updateValue(event)} value={query} />
//         <button onClick={() => { searchPhotos(query) }}>Search</button>
//       </div>
//     )
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    searchPhotos: (query) => {
      dispatch(fetchPhotos(query))
    },
    setQueryFromSearch: (query) => {
      dispatch(setQuery(query))
    },
    showSearchCriteriaErrors: (hasSearchErrors) => {
      dispatch(showSearchErrors(hasSearchErrors))
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchComponent);
