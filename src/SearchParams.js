import React from "react";
import SearchBox from "./SearchBox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
  // sends user to home page...
  // no need to worry about props because those values already exist in App state
  handleSearchSubmit = () => {
    navigate("/");
  };

  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
