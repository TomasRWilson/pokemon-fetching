import { useState } from "react";
import DropDownTree from "./DropDownTree";

export default function SpriteDisplay(props) {

  const [other, setOther] = useState(false);
  const [versions, setVersions] = useState(false);

  const sprites = props.sprites;

  function cleanKey(key) {
    const splitKey = key.split("_");
    for (var i = 0; i < splitKey.length; i++) {
      splitKey[i] = splitKey[i].charAt(0).toUpperCase() + splitKey[i].slice(1);
    }
    return splitKey.join(" ");
  }

  return (
    <>
      <div className="inline-block w-full bg-white shadow-md rounded-t-lg">
        <h2 className="text-3xl ml-10 font-bold my-3">Sprites</h2>
      </div>
      <div className="rounded-b-lg bg-white">
      <div className="flex flex-row">
        {Object.keys(sprites) ? 
          Object.keys(sprites).map((sprite) => {
            if (sprite != "other" && sprite != "versions") {
              if (sprites[sprite]) {
                return (
                  <div className={"grow text-center my-3"}>
                    <p className="font-bold">{cleanKey(sprite)}</p>
                    <img src={sprites[sprite]} className="mx-auto w-3/12" />
                  </div>
                );
              }
            }
          })
         : null
        }
      </div>
      <DropDownTree title="other" data={sprites.other}/>
      <DropDownTree title="versions" data={sprites.versions}/>
      </div>
    </>
  );
}
