import React, { Component } from "react";
import "./Pokecard.css";
class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <div className="Pokecard-image-container">
          <img className="Pokecard-img" src={this.props.img} alt="pokemon" />
        </div>
        <p className="Pokecard-name">{this.props.name}</p>
        <p className="Pokecard-type">Type: {this.props.type}</p>
        <p className="Pokecard-exp">Exp: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
