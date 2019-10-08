import React from "react";
import { NavLink, Link } from "react-router-dom";

const SavedList = props => {
  // console.log("saved list", props);
  const clearMovie = () => {
    const clearSavedList = props.clearSavedList;
    clearSavedList();
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          className="saved-movie"
          key={movie.id}
        >
          {movie.title}
        </NavLink>
      ))}
      <div className="nav-right">
        {props.list === undefined || props.list.length === 0 ? null : (
          <button onClick={clearMovie} className="clear-button">
            Clear
          </button>
        )}
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default SavedList;
