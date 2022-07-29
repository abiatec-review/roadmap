import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import withHocs from './DirectorsSearchHoc';

class DirectorsSearch extends React.Component {

  render() {
    const { classes, handleSearch, handleChange, name } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onKeyPress={(e) => handleSearch(e)}
          value={name}
          onChange={handleChange('name')}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
};

export default withHocs(DirectorsSearch);
