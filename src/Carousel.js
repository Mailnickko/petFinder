import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  // From React 16, Means this component relies on parent's props to change state.

  // static means this is kind of a singleton, only one exists no matter how many instances of Carousel exist

  // Pro tip: avoid using 'this' in static methods as it will break all instances
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumnbail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
