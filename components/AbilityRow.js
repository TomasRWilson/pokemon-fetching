import { useState, useEffect } from "react";

export default function AbilityRow(props) {
  const [ability, setAbility] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setAbility(data);
        setLoading(false);
      });
  }, []);

  if (!ability) return <p>No Ability Data</p>;

  function toTitleCase(str) {
    str = str.toLowerCase();
    str = str.split("-");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  function getEnglishEffect() {
    for (var i = 0; i < ability.effect_entries.length; i++) {
      if (ability.effect_entries[i].language.name == "en") {
        return ability.effect_entries[i].effect;
      }
    }
    return "No english ability description.";
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="my-2 p-3 basis-1/4 border-r border-gray-200 align-middle">
        <div className="block text-2xl text-center m-auto font-bold">
            <p>{toTitleCase(ability.name)}</p>
        </div>
        </div>
        <div className="basis-3/4 my-5 text-center">
        <p className="text-md font-bold m-auto w-10/12">{getEnglishEffect()}</p>
        </div>
      </div>
    </>
  );
}
