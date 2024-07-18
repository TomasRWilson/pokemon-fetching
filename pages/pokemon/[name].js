import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import SpriteDisplay from "@/components/SpriteDisplay";
import { useRouter } from "next/router";
import AbilityDisplay from "@/components/AbilityDisplay";
import MovesDisplay from "@/components/MovesDisplay";
import TitleBar from "@/components/TitleBar";
import StatTable from "@/components/StatTable";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });



export default function Home(props) {

  const router = useRouter();

  if(props.error){
    return(<>
    <Head>
      <title>Whoops</title>
    </Head>
    <main>
      
      <div className="realtive flex flex-col items-center bg-white w-[500px] mt-20 m-auto rounded-2xl h-[600px] shadow-lg">
        <img src="/ditto.svg" className="w-8/12 my-16"></img>
        <p className="text-lg">Hmm... looks like we did not catch them all.</p>
        <p className="text-lg">We can not find that Pokemon.</p>
      </div>
    </main>
      
    </>)
  }
  const title =
    props.data.name.charAt(0).toUpperCase() + props.data.name.slice(1);
  
  var page = router.query.page;
  if(!page){
    page = 0;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        
        <Link
          className="float-left mt-1 mb-5 ml-16 rounded-full bg-stone-800 h-[56px] w-[56px]"
          href={`/?page=${page}`}
        >
          <img className="w-7 h-7 z-10 invert ml-3 mt-3.5" src="/left-arrow.svg"></img>
        </Link>
        <div className="w-10/12 mx-auto">
          <TitleBar name={props.data.name} types={props.data.types} />
          <SpriteDisplay sprites={props.data.sprites} />
          <StatTable stats={props.data.stats} />
          <AbilityDisplay abilities={props.data.abilities} />
          <MovesDisplay moves={props.data.moves} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const pokemonName = params.name;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    method: "GET",
  });
  var error = false;
  var repo = {};
  try {
    var repo = await res.json();
  } catch (err) {
    console.log(err);
    error = true;
  }
  
  return { props: { data: repo , error: error} };
};
