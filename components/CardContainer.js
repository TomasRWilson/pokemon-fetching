import PokemonCard from "./PokemonCard";

export default function CardContainer(props) {

    return (
      <>
      <div className="grid grid-cols-3 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 gap-6 max-w-7xl mx-auto">
        {props.cards.map((card) => (
          <PokemonCard key={card.name} url={card.url} page={props.page}/>
        ))}
      </div>
      </>
    )
  }