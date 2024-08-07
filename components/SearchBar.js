import Link from "next/link";
import { useEffect, useState } from "react"


export default function Searchbar(props) {

    const names = props.names;

    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [availableNames, setAvailableNames] = useState([]);

    const onFocus = () => {
        setFocused(true);
        if(value.length > 0){
            setIsOpen(true);
        }else{
            setIsOpen(false);
        }
        };

    const onBlur = () => {
        setFocused(false)
        setIsOpen(false);
    };

    function handleDropMenu(str){
        if(str.length > 0){
            setIsOpen(true);
        }else{
            setIsOpen(false);
        }
        setValue(str);
        handleChange();
    }

    function handleChange(){

        const available = names.filter(str => str.includes(value.toLowerCase()));

        setAvailableNames(available);
    }

    return(
        <>
            <div className="flex flex-col max-w-lg float-right mr-20">
                <div className="float-right flex mt-2.5 border-2 rounded-xl py-2 px-4">
                    <input className="grow basis-3/4 focus:outline-none mr-4" type="text" placeholder="Search..." value={value} onChange={(e) => (handleDropMenu(e.target.value))} onFocus={onFocus} onBlur={onBlur}/>
                    <Link href={`/pokemon/${value}`}><img src="/search.svg" className="w-6 h-6 grow basis-1/4"></img></Link>
                </div>
                { isOpen ? <>
                    <div className="absolute mt-16 grow flex flex-col bg-white float-left rounded-xl border-2">
                        {availableNames.slice(0, 10).map((name) => (<p key={name} className="m-1 ml-3 cursor-pointer" onClick={(e) => (setValue(e.target.textContent))}>{name}</p>))}
                    </div>
                </> : null }
            </div>
        </>
    )
}