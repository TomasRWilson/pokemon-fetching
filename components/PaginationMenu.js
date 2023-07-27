import Link from "next/link";
import { useState } from "react";

export default function PaginationMenu(props) {
  const maxPage = Math.ceil(props.count / props.limit);
  const page = (Number(props.page) + 1);
  console.log(page);

  function PageButton(pageNumber) {
    return (
      <>
        <button
          className="h-full w-20 hover:bg-slate-400"
          onClick={() => (props.changePage(pageNumber.pageNumber))}
        >
          {pageNumber.pageNumber}
        </button>
      </>
    );
  }

  function TextBox() {
    return (
      <>
        <button className="h-full w-10  cursor-default"><img className="w-4 h-4 mx-auto" src="more.svg" /></button>
      </>
    );
  }

  function CurrentPage() {
    return (
      <>
        <button className="h-full w-20 cursor-default">{page}</button>
      </>
    );
  }

  function NextPageButton() {
    return (
      <>
        <button
          className="h-full w-20 hover:bg-slate-400"
          onClick={() => (props.changePage(page + 1))}
        >
          <img className="w-4 h-4 mx-auto" src="right-arrow.svg" />
        </button>
      </>
    );
  }

  function PreviousPageButton() {
    return (
      <>
        <button
          className="h-full w-20 hover:bg-slate-400"
          onClick={() => (props.changePage(page - 1))}
        >
          <img className="w-4 h-4 mx-auto" src="left-arrow.svg" />
        </button>
      </>
    );
  }

  return (
    <>
    <ul className="block text-center h-20 mt-5 bg-white w-full list-none overflow-hidden text-xl">
        {page == 1 ? null : (
          <>
            <li className="inline"><PreviousPageButton /></li>
            <li className="inline max-[640px]:hidden"><PageButton pageNumber={1} /></li>
          </>
        )}
        {page > 2 ? <li className="inline max-[640px]:hidden"><TextBox /></li> : null}
        <li className="inline"><CurrentPage /></li>
        {page < (maxPage - 1) ? <li className="inline max-[640px]:hidden"><TextBox /></li> : null}
        {page == maxPage ? null : (
        <>
          <li className="inline max-[640px]:hidden"><PageButton pageNumber={maxPage} /></li>
          <li className="inline"><NextPageButton /></li>
        </>
        )}
        
      </ul>
    </>
  );
}
