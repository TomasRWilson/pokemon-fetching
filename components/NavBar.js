import Link from "next/link";
import Searchbar from "./SearchBar";

export default function NavBar(props) {
  return (
    <>
      <div className="top-0 mb-5 w-full max-h-15 h-16 bg-white border-b-2 border-gray-300">
        <Link href="/">
        <img src="/pokeball.svg" className="float-left max-h-11 m-2"/>
        <p className="float-left font-bold text-3xl sm:text-4xl mt-2 inline">Pokemon Finder</p>
        </Link>
        <Searchbar names={props.names}/>
      </div>
    </>
  );
}
