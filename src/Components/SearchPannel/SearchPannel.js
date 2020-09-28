import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchPannel.css";

function SearchPannel() {
  return (
    <form>
      <input className="boxInput" />
      <button className="boxSearch">
        <SearchIcon fontSize="large" />
      </button>
    </form>
  );
}

export default SearchPannel;
