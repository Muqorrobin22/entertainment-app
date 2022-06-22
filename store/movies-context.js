import React from "react";

// const Mydata = [...data];

const MoviesContext = React.createContext({
  Mydata: [],
  isBookmarked: false,
  filterData: [],
  handleBookmark: () => {},
  handleChangeInput: () => {},
});

export default MoviesContext;
