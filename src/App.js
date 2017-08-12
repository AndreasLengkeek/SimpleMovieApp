import React, { Component } from 'react';
import './App.css';

var movie = {
    title: "Twelve Monkeys",
    release: "27/12/1995",
    duration: "129 minutes",
    genre: "Mystery, Sci-Fi, Thriller",
    synopsis: "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet."
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { "title": movie.title, "release": movie.release, "duration": movie.duration,
                            "genre": movie.genre, "synopsis": movie.synopsis };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, function() {
            console.log(this.state);
        });
    }

    handleSubmit(event) {

    }

  render() {
    return (
      <div className="app">
          <h1>Movie Recommendation</h1>
          <form>
              <div id="movie">
                  <table>
                      <tbody>
                      <tr>
                          <td><label>Title</label></td>
                          <td><input name="title" type="text"
                              value={this.state.title}
                              onChange={this.handleInputChange} />
                          </td>
                      </tr>
                      <tr>
                          <td>Release Date</td>
                          <td><input name="release" type="text"
                              value={this.state.release}
                              onChange={this.handleInputChange} />
                          </td>
                      </tr>
                      <tr>
                          <td>Duration</td>
                          <td><input name="duration" type="text"
                              value={this.state.duration}
                              onChange={this.handleInputChange} />
                          </td>
                      </tr>
                      <tr>
                          <td>Genre</td>
                          <td><input name="genre" type="text"
                              value={this.state.genre}
                              onChange={this.handleInputChange} />
                          </td>
                      </tr>
                      <tr>
                          <td>Synopsis</td>
                          <td><textarea name="synopsis" type="text"
                              value={this.state.synopsis}
                              onChange={this.handleInputChange} />
                          </td>
                      </tr>
                      </tbody>
                  </table>
                  <p>
                      <input
                          type="submit"
                          value="Submit" />
                  </p>
              </div>
          </form>
      </div>
    );
  }
}

export default App;
