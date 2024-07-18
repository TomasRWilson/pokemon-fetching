import { useState } from "react";

export default function DropDownTree(props) {
  const [isOpen, setIsOpen] = useState(false);

  function cleanKey(key) {
    const splitKey = key.split("_");
    for (var i = 0; i < splitKey.length; i++) {
      splitKey[i] = splitKey[i].charAt(0).toUpperCase() + splitKey[i].slice(1);
    }
    return splitKey.join(" ");
  }

  const data = props.data;
  const title = cleanKey(props.title);

  return (
    <>
      <button
        className="w-full flex bg-white border-t-2 border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img
            src="/right-arrow.svg"
            className="h-4 w-4 my-auto ml-8 rotate-90"
          ></img>
        ) : (
          <img src="/right-arrow.svg" className="h-4 w-4 my-auto ml-8"></img>
        )}
        <h2 className="text-2xl ml-3 font-bold my-3">{title}</h2>
      </button>
      {isOpen ? (
        <div className=" w-full bg-white">
          <div className="ml-5">
            {Object.keys(data).map((sprite) => {
              if (typeof data[sprite] === "object" && data[sprite] !== null) {
                return <DropDownTree key={sprite} title={sprite} data={data[sprite]}/>;
              }
            })}
          </div>
        </div>
      ) : null}
      {isOpen ? <>
        <div className="flex flex-row bg-white">
          {Object.keys(data).map((sprite) => {
            if (!(typeof data[sprite] === "object" && data[sprite] !== null)) {
                console.log(`${title}: ${sprite}`);
              if (data[sprite]) {
                return (
                  <div key={sprites[sprite]} className={"grow text-center my-3"}>
                    <p className="font-bold">{cleanKey(sprite)}</p>
                    <img src={data[sprite]} className="mx-auto w-3/12 max-w-40" />
                  </div>
                );
              }
            }
          })}
          </div>
          </>
         : null
        }
    </>
  );
}
