import {MiniBtn} from "./mini_btn.jsx";
import Image from "next/image";



export function BaseBar({title="", logo, bg="win", linkTo="", fixed=false, onClick=null}) {
    let style = "flex z-20 sm:h-8 h-10 items-center justify-between pl-1 "
    switch (bg) {
        case "win":
            style += "bg-gradient-top text-white ";
            break
        case "grey":
            style += "bg-stone-400 text-white sticky top-0 z-20";
            break
        case "blue":
            style += "bg-[#000C78] text-white ";
            break
        case "light_blue":
            style += "bg-[#1400FF] text-white ";
            break
        case "pink":
            style += "bg-[#D36E9C] text-white ";
            break
    }
    return (
        <>
            <div className={style + (fixed && " fixed w-full")}>
                <div className="flex z-20 items-center gap-2 text-4xl ml-2 h-full ">
                    <Image className="h-full p-[2px]" src={logo} alt=""/>
                    <div className="text-3xl">Muiraje <sup className="text-lg">8+8+8</sup><span className="pl-2 hidden sm:inline">{title}</span></div>
                </div>
                <div className="flex z-20 flex-row h-full p-[2px] w-fit">
                    <MiniBtn ico="min"/>
                    <MiniBtn ico="full"/>
                    <MiniBtn linkTo={linkTo} ico="close" onClick={onClick}/>
                </div>
            </div>

        </>
    )
}