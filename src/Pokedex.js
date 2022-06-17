import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
class Pokedex extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="Pokedex">
        <h2>Total experience: {this.props.exp}</h2>
        {this.props.isWinner ? (
          <h3 style={{ color: "#097969" }}>WINNER</h3>
        ) : (
          <h3 style={{ color: "red" }}>LOSER</h3>
        )}
        <div className="Pokedex-dashboard">
          {data.map((pokemon, i) => {
            let id = pokemon.id + "";
            while (id.length < 3) {
              id = "0" + id;
              console.log(id);
            }
            const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

            return (
              <Pokecard
                name={pokemon.name}
                img={img}
                exp={pokemon.base_experience}
                type={pokemon.type}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
