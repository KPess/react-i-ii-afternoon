import React, { Component } from "react";

class Slide extends Component {

  render() {
    const {peopleData } = this.props;
    return (
      console.log(peopleData.id),
      <div className="slide">
        <div className="names">
          <h1 className="fullName">
            {peopleData.name.first} {peopleData.name.last}
          </h1>

          <div className="place">From: <span className="info">{peopleData.city}, {peopleData.country}</span>
          </div>
          <div className="place">Job Title: <span className="info"> {peopleData.title}</span> 
          </div>
          <div className="employer">Employer: <span className="info">{peopleData.employer}</span> 
          </div>
          <div className="place"> Favorite Movies:<span className="info">
            <ol class="movies">
              <li>{peopleData.favoriteMovies[0]}</li>
              <li>{peopleData.favoriteMovies[1]}</li>
              <li>{peopleData.favoriteMovies[2]}</li>
            </ol>
            </span>
          </div>
        </div>
        <h1 className="counter">{peopleData.id}/25</h1>
      </div>
    );
  }
}

export default Slide;
