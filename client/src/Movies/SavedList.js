import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  console.log("saved list", props);
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`} className="saved-movie">
          {movie.title}
        </Link>
      ))}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default SavedList;
