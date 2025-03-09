// import styles from "./main.module.css";
import Link from "next/link";
import Image from "next/image";

import close from "@/components-assets/icons/close.svg"
import min from "@/components-assets/icons/min.svg"
import full from "/components-assets/icons/full.svg"

export function MiniBtn({ ico="close", w="7", h="7", linkTo = "", onClick=null }) {

    let path = close
    switch (ico) {
        case "min":
            path = min
            break
        case "full":
            path = full
            break
    }

    return (
        <button className={` group border-r-2 m-0 border-b-2 w-fit border-stone-700 active:border-t-2 active:border-l-2 active:border-r-0 active:border-b-0`}>
            <div className="border-l-2 border-t-2 m-0 border-stone-100 h-full w-fit group-active:border-0 group-active:border-r-2 group-active:border-b-2">
                <div className="border-r-2 m-0 border-b-2 border-stone-500 bg-stone-300 hover:bg-stone-200  w-fit  h-full group-active:border-0 group-active:border-l-2 group-active:border-t-2" onClick={onClick}>
                    {linkTo != "" ? <Link href={linkTo}><Image className="h-full max-w-[30px] sm:max-w-[22px]" src={path} alt="" /></Link> : <Image className="h-full max-w-[30px] sm:max-w-[22px]" src={path} alt="" />}
                </div>
            </div>
        </button>
    )
}

export function WinButton({ children, onClick=undefined }) {
    return (
        <div className="w-fit h-20 border-b-4 border-r-4 border-stone-600 bg-stone-300 text-black text-4xl hover:bg-stone-200 group active:border-t-4 active:border-l-4 active:border-r-0 active:border-b-0">
            <div className="h-full w-full border-l-4 border-t-4 border-stone-200 group-active:border-0 group-active:border-r-4 group-active:border-b-4">
                <button onClick={onClick} className="h-full w-full px-8 border-b-4 border-r-4 border-stone-400 group-active:border-0 group-active:border-l-4 group-active:border-t-4 text-nowrap">
                    {children}
                </button>
            </div>    
        </div>
    )
}

