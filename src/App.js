import React from "react";
import ReactDOM from "react-dom";
import Results from "./Results";
import Details from "./Details";
import Navbar from "./Navbar";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    };
  }

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        const petfinder = data.petfinder;
        if (
          petfinder &&
          petfinder.breeds &&
          Array.isArray(petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: petfinder.breeds.breed
          });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }

  handleLocationChange = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleAnimalChange = e => {
    this.setState(
      {
        animal: e.target.value,
        breed: ""
      },
      this.getBreeds
    );
  };

  handleBreedChange = e => {
    this.setState({
      breed: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* 
        This provider is being supplied by context API 

        Now if a consumer is instantiated in any of these children components, they will have access to the current state. 

        Providers can be nested to create multiple contexts
        */}
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
