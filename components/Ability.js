import { useState, useEffect } from "react";

export default function Ability({ url }) {
  const [ability, setAbility] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAbility(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!ability) return <p>No Ability Data</p>;

  function toTitleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
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

  return !ability ? null : (
    <div className="text-center mt-1">
      <h2 className="font-bold">{toTitleCase(ability.name)}</h2>
      <p className="text-xs font-bold text-left p-1">{getEnglishEffect()}</p>
    </div>
  );
}
