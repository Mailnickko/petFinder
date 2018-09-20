import React from "react";

const SearchContext = React.createContext({
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

// Don't use Consumer without provider being above it

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
