import { useState, useEffect } from "react";
import Link from 'next/link';
import Ability from "./Ability";

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [bgImg, setBgImg] = useState(null);

  const page = props.page;

  useEffect(() => {
    setLoading(true);
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!pokemon) return <p>No Pokemon Data</p>;

  if (!bgImg) {
    switch (pokemon.types[0].type.name) {
      case "normal":
        setBgImg("/colourless.png");
        break;
      case "fighting":
        setBgImg("/fairy.png");
        break;
      case "flying":
        setBgImg("/flying.png");
        break;
      case "poison":
        setBgImg("/poison.png");
        break;
      case "ground":
        setBgImg("/ground.png");
        break;
      case "rock":
        setBgImg("/ground.png");
        break;
      case "bug":
        setBgImg("/grass.png");
        break;
      case "ghost":
        setBgImg("/ghost.png");
        break;
      case "steel":
        setBgImg("/steel.png");
        break;
      case "fire":
        setBgImg("/fire.png");
        break;
      case "water":
        setBgImg("/water.png");
        break;
      case "grass":
        setBgImg("/grass.png");
        break;
      case "electric":
        setBgImg("/electric.png");
        break;
      case "psychic":
        setBgImg("/psychic.png");
        break;
      case "ice":
        setBgImg("/ice.png");
        break;
      case "dragon":
        setBgImg("/dragon.png");
        break;
      case "dark":
        setBgImg("/ghost.png");
        break;
      case "fairy":
        setBgImg("/fairy.png");
        break;
      default:
    }
  }

  function toTitleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  return !pokemon ? null : (
    <div id="PokemonCard" className="max-[640px]:scale-90 p-3 z-0 flex flex-col w-full relative rounded-xl bg-yellow-300 shadow-md transition ease-in-out delay-100 max-[640px]:hover:scale-95 hover:scale-105 hover:shadow-xl duration-200">
      <div className="w-full h-full object-contain object-center relative block rounded-lg">
        <img
          src={bgImg}
          className={"object-fill object-center w-full h-full rounded-lg"}
        />
      </div>

        <Link href={`/pokemon/${pokemon.name}?page=${page}`} className="absolute rounded-lg text-center max-h-full top-0 bottom-0 ml-1 m-4 overflow-y-auto">
            <ul className="inline-block justify-between w-full p-1">
              <li>
                <p className="font-bold text-lg float-left">
                  {toTitleCase(pokemon.name)}
                </p>
              </li>
              <li>
                <p className="font-bold float-right">
                  HP {pokemon.stats && pokemon.stats[0].base_stat}
                </p>
              </li>
            </ul>

            <div className="w-11/12 mx-auto aspect-video bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 p-1">
  
          <div className="w-full aspect-video bg-white">
            <img
              className="object-contain h-full mx-auto"
              src={
                pokemon.sprites &&
                pokemon.sprites.other["official-artwork"].front_default
              }
            ></img>
          </div>
          <div className="w-full bg-gray-100 border-t-1 border-gray-500 text-xs mx-auto">
            <span>HT {pokemon.height}</span>
            <span className="ml-4">WT {pokemon.weight}</span>
          </div>
          </div>
          <div className="max-h-5/12 h-6/12">
          {pokemon.abilities &&
            pokemon.abilities.map((ability) => (
              <Ability key={ability.ability.name} url={ability.ability.url} />
            ))}
          </div>
        </Link>
    </div>
  );
}
