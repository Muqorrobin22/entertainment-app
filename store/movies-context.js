import React from "react";

// const Mydata = [...data];

const MoviesContext = React.createContext({
  Mydata: [],
  isBookmarked: false,
  handleBookmark: () => {},
});

export default MoviesContext;
