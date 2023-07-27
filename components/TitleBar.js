export default function TitleBar(props) {

    const name = props.name;
    const types = props.types;

    function toTitleCase(str) {
        str = str.toLowerCase();
        str = str.split("-");
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(" ");
      }

    return(
        <>
            <div className="inline-block w-full bg-white rounded-lg mb-5">
                <p className="float-left text-5xl font-bold ml-10 my-2">{toTitleCase(name)}</p>
                <div className="mt-4">
                    {types.map((type) => {
                        switch (type.type.name) {
                        case "normal":
                            return(
                                <>
                                    <div className="bg-stone-500 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "fighting":
                            return(
                                <>
                                    <div className="bg-red-800 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "flying":
                            return(
                                <>
                                    <div className="bg-violet-400 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "poison":
                            return(
                                <>
                                    <div className="bg-fuchsia-900 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "ground":
                            return(
                                <>
                                    <div className="bg-amber-200 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "rock":
                            return(
                                <>
                                    <div className="bg-yellow-600 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "bug":
                            return(
                                <>
                                    <div className="bg-lime-500 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "ghost":
                            return(
                                <>
                                    <div className="bg-indigo-900 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "steel":
                            return(
                                <>
                                    <div className="bg-gray-400 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "fire":
                            return(
                                <>
                                    <div className="bg-orange-500 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "water":
                            return(
                                <>
                                    <div className="bg-sky-700 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "grass":
                            return(
                                <>
                                    <div className="bg-green-500 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "electric":
                            return(
                                <>
                                    <div className="bg-yellow-400 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "psychic":
                            return(
                                <>
                                    <div className="bg-pink-600 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "ice":
                            return(
                                <>
                                    <div className="bg-cyan-200 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "dragon":
                            return(
                                <>
                                    <div className="bg-violet-950 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "dark":
                            return(
                                <>
                                    <div className="bg-yellow-950 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        case "fairy":
                            return(
                                <>
                                    <div className="bg-pink-200 rounded-md float-right mr-5">
                                        <p className="text-white font-bold my-1 mx-2">{toTitleCase(type.type.name)}</p>
                                    </div>
                                </>
                            )
                            break;
                        default:
                        }
                    })}
                </div>
            </div>
        </>
    );
}