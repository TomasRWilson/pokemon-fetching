import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google';
import CardContainer from '@/components/CardContainer';
import { useState } from 'react';
import PaginationMenu from '@/components/PaginationMenu';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  const router = useRouter();

  const [cards, setCards] = useState(null);
  const [page, setPage] = useState(null);

  const urlVariables = router.query;

  var availableNames = [];

  if(cards){
    for(var i=0;i<cards.length;i++){
      availableNames.push(cards[i].name)
    }
  }

  if(!page && page != 0){
    if(urlVariables.page){
      var pageNumber = urlVariables.page;
    }else{
      var pageNumber = 0;
    }
    setPage(pageNumber);
  }

  if(!cards){
    setCards(props.cards);
  }

  function changePage(newPage){
    setPage(newPage);
  }

  return (
    <>
    <Head>
      <title>Pokemon Finder</title>
    </Head>
    <main>
      <NavBar names={availableNames}/>
      <CardContainer cards={props.cards.slice(page*9, (page*9)+9)} page={page}/>
      <PaginationMenu changePage={(newPage) => changePage(newPage - 1)} page={page} count={props.count} limit={9}/>
    </main>
    </>
  )
}

export const getServerSideProps = async(context) =>{
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`, {method: "GET"});
  const repo = await res.json()
  return { props: { cards: repo.results, count: repo.count} }
}