import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({
        output: "full",
        location: "Los Angeles, CA"
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets
        });
      });
  }

  render() {
    return (
      <div className="search">
        {this.state.pets.map(pet => {
          const { animal, name, id } = pet;
          let { breed: breeds } = pet.breeds;
          breeds = Array.isArray(breeds) ? breeds.join(", ") : breeds;
          return (
            <Pet
              key={id}
              animal={animal}
              name={name}
              breed={breeds}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
