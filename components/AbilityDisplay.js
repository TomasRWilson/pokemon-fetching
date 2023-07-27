import AbilityRow from "./AbilityRow";

export default function AbilityDisplay(props) {
  const abilities = props.abilities;

  return (
    <>
      <div className="inline-block w-full bg-white shadow-md shadow-gray-200 mt-5 rounded-t-lg">
        <h2 className="text-3xl ml-10 font-bold my-3">Abilities</h2>
      </div>
      <div className="rounded-b-lg bg-white">
      {abilities.map((ability) => {
        return(<AbilityRow key={ability.ability.name} url={ability.ability.url} />)
      })}
      </div>
    </>
  );
}
