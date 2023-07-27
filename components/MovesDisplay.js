import { useState } from "react";

export default function MovesDisplay(props) {
  const [isOpen, setIsOpen] = useState(true);
  const moves = props.moves;

  function cleanKey(key) {
    const splitKey = key.split("-");
    for (var i = 0; i < splitKey.length; i++) {
      splitKey[i] = splitKey[i].charAt(0).toUpperCase() + splitKey[i].slice(1);
    }
    return splitKey.join(" ");
  }

  return (
    <>
      {isOpen ? (
        <>
          <button
            className="z-10 w-full flex bg-white shadow-md mt-5 rounded-t-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="/right-arrow.svg"
              className="h-5 w-5 my-auto ml-8 rotate-90"
            ></img>
            <h2 className="text-3xl ml-3 font-bold my-3">Moves</h2>
          </button>
          <div className="bg-gray-200 grid grid-cols-5 text-center px-5 rounded-b-lg mb-5 shadow-inner">
            {moves.map((move) => {
              return (
                <>
                  <div
                    key={move.move.name}
                    className="m-5 font-bold rounded-lg bg-white p-3 shadow-lg"
                  >
                    <p>{cleanKey(move.move.name)}</p>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <button
          className="w-full flex bg-white mt-5 rounded-lg mb-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/right-arrow.svg" className="h-5 w-5 my-auto ml-8"></img>
          <h2 className="text-3xl ml-3 font-bold my-3">Moves</h2>
        </button>
      )}
    </>
  );
}
