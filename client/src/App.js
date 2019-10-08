import React, { useState } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const clearSavedList = () => {
    setSavedList([]);
  };

  return (
    <div>
      <Route
        path="/"
        render={props => (
          <SavedList
            list={savedList}
            clearSavedList={clearSavedList}
            {...props}
          />
        )}
      />
      <Route exact path="/" component={MovieList} />
      <Route
        exact
        path="/movies/:movieId"
        render={props => <Movie addToSavedList={addToSavedList} {...props} />}
      />
    </div>
  );
};

export default App;
