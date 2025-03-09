"use client"

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";

import lbar from "@/assets/lpusk.svg"
import puskbtn from "@/assets/puskbtn.svg"
import puskbtn_click from "@/assets/puskbtn-click.svg"
import sound from "@/components-assets/pusk/sound.svg"
import ru from "@/components-assets/pusk/ru.svg"

function PuskItem({children, off=false, link=false, toLink=""}) {
    return (
        <>
            <Link href={toLink}>
            <div className={"h-10 w-full pl-6 flex items-center " + (off ? " text-stone-500" : "hover:bg-[#000C78] hover:text-white")}>
                {children}
            </div>
            </Link>
        </>
    )
}

export function Del() {
    return (
        <>
            <div className="h-0 w-full border-t-2 my-1 border-stone-500">
                <div className="w-full border-b-2">
                </div>
            </div> 
        </>
    )
}


function PuskBtn() {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => isOpen ? setOpen(false) : setOpen(true);

    return (
        <>
            <button onClick={handleOpen} className="">
                <Image className="h-full sm:max-w-[75px] max-w-fit hover:brightness-110" src={isOpen ? puskbtn_click : puskbtn} alt="" />
            </button>
            {isOpen && (
                <div className=" absolute bottom-11 sm:bottom-9 left-0 w-80 h-fit bg-stone-300  border-r-2 border-b-2 border-stone-700 ">
                <div className="w-full h-fit border-t-2 border-l-2 border-stone-100">
                    <div className="w-full h-fit p-1 border-r-2 border-b-2 border-stone-500 flex flex-row gap-2">
                        <div className=" h-fit w-11 rotate-180 bg-gradient-dark">
                            <div className="text-vertical text-white w-full h-[32rem] text-5xl pt-2 text-ver">
                                Muiraje 2024 Office
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <PuskItem>Muiraje: cozy home collection</PuskItem>
                            <PuskItem off>Muiraje: ????? collection</PuskItem>
                            <PuskItem off>Muiraje: ????? collection</PuskItem>
                            <Del/>
                            <PuskItem link toLink={"/documents/delivery"}>Доставка</PuskItem>
                            <PuskItem link toLink={"/documents/return"}>Возврат</PuskItem>
                            <PuskItem link toLink={"/documents/payment"}>Оплата</PuskItem>
                            <PuskItem link toLink={"/documents/contact"}>Контакты</PuskItem>
                            <PuskItem link toLink={"/documents/"}>Оферта и политика конфиденциальности</PuskItem>
                            <Del/>
                            <PuskItem off>Office Gallery</PuskItem>
                            <PuskItem off>Office Vacancies</PuskItem>
                            <PuskItem off>Office Music</PuskItem>
                            <Del/>
                            <PuskItem link toLink={"/"}>Завершить ночёвку</PuskItem>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </>
    )
}

export function Pusk() {
    const now = new Date();
    const time = now.getHours() + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() :  now.getMinutes())
    return (
        <>
            <div className=" absolute bottom-0 w-full border-t-2 border-stone-600 flex justify-between h-12 sm:h-10 p-1 bg-[#B5B5B5]">
                <div className=" relative flex h-full m-0 p-0">
                    <PuskBtn/>
                    <Image className="h-full w-full hidden sm:inline-block" src={lbar} alt="" />
                </div>
                <div className="border-b-2 border-r-2 border-white h-full">
                    <div className="h-full flex flex-row items-center  border-t-2 border-l-2 border-stone-500 p-[2px] pl-1">
                        <Image className="h-full mr-1" src={sound} alt=""/>
                        <Image className="h-full" src={ru} alt=""/>
                        <time className="font-basis33 text-2xl sm:text-lg mx-2 ">{time}</time>
                    </div>
                </div>


            </div>
        </>
    )
}