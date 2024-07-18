import Link from 'next/link';
import Ability from "./Ability";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function PokemonCard(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Card props={props} />
    </QueryClientProvider>
  )
}

function Card(props) {

  const page = props.props.page;
  const queryResult = useQuery({
    queryKey: [props.props.url],
    queryFn: async () => {
      const response = await fetch( 
        props.props.url,
      )
      return await response.json()
    },
  })

  if (queryResult.isPending || queryResult.isFetching) return 'Loading...';

  if (queryResult.error) return 'An error has occurred: ' + error.message;

  const data = queryResult.data;

  var bgImg = null;

  if (!bgImg) {
    switch (data.types[0].type.name) {
      case "normal":
        bgImg = "/colourless.png";
        break;
      case "fighting":
        bgImg = "/fairy.png";
        break;
      case "flying":
        bgImg = "/flying.png";
        break;
      case "poison":
        bgImg = "/poison.png";
        break;
      case "ground":
        bgImg = "/ground.png";
        break;
      case "rock":
        bgImg = "/ground.png";
        break;
      case "bug":
        bgImg = "/grass.png";
        break;
      case "ghost":
        bgImg = "/ghost.png";
        break;
      case "steel":
        bgImg = "/steel.png";
        break;
      case "fire":
        bgImg = "/fire.png";
        break;
      case "water":
        bgImg = "/water.png";
        break;
      case "grass":
        bgImg = "/grass.png";
        break;
      case "electric":
        bgImg = "/electric.png";
        break;
      case "psychic":
        bgImg = "/psychic.png";
        break;
      case "ice":
        bgImg = "/ice.png";
        break;
      case "dragon":
        bgImg = "/dragon.png";
        break;
      case "dark":
        bgImg = "/ghost.png";
        break;
      case "fairy":
        bgImg = "/fairy.png";
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

  return !data ? null : (
    <div id="PokemonCard" className="max-[640px]:scale-90 p-3 z-0 flex flex-col w-full relative rounded-xl bg-yellow-300 shadow-md transition ease-in-out delay-100 max-[640px]:hover:scale-95 hover:scale-105 hover:shadow-xl duration-200">
      <div className="w-full h-full object-contain object-center relative block rounded-lg">
        <img
          src={bgImg}
          className={"object-fill object-center w-full h-full rounded-lg"}
        />
      </div>

        <Link href={`/pokemon/${data.name}?page=${page}`} className="absolute rounded-lg text-center max-h-full top-0 bottom-0 ml-1 m-4 overflow-y-auto">
            <ul className="inline-block justify-between w-full p-1">
              <li>
                <p className="font-bold text-lg float-left">
                  {toTitleCase(data.name)}
                </p>
              </li>
              <li>
                <p className="font-bold float-right">
                  HP {data.stats && data.stats[0].base_stat}
                </p>
              </li>
            </ul>

            <div className="w-11/12 mx-auto aspect-video bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 p-1">
  
          <div className="w-full aspect-video bg-white">
            <img
              className="object-contain h-full mx-auto"
              src={
                data.sprites &&
                data.sprites.other["official-artwork"].front_default
              }
            ></img>
          </div>
          <div className="w-full bg-gray-100 border-t-1 border-gray-500 text-xs mx-auto">
            <span>HT {data.height}</span>
            <span className="ml-4">WT {data.weight}</span>
          </div>
          </div>
          <div className="max-h-5/12 h-6/12">
          {data.abilities &&
            data.abilities.map((ability) => (
              <Ability key={ability.ability.name} url={ability.ability.url} />
            ))}
          </div>
        </Link>
    </div>
  );
}
