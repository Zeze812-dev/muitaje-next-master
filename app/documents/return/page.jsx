import {Window} from "@/components/documents/window.jsx";
import Image from "next/image";
import girl from "@/assets/gif/return_gir.webp"
import itworked2 from "@/components-assets/order/itworked23.webp";
import React from "react";
import vozvrat from "@/components-assets/document/vozvrat.webp"
import vozvrat2 from "@/components-assets/document/vozvrattxt.webp"

export default function ReturnsPage() {
    return (
        <>
            <title>Muiraje Returns</title>
            <Window title="Documents/Returns" black>
                <div className="flex w-full justify-center gap-3 flex-col sm:flex-row">
                    <div className=" text-left flex flex-col items-start pl-8">
                        <Image className="h-52 render" src={vozvrat} alt="" />
                        <Image className=" render" src={vozvrat2} alt="" />
                    </div>
                    <div className=" flex flex-col items-end">
                        <Image   width={1200} className="flex" src={girl} alt=""/>
                    </div>

                </div>

            </Window>
        </>

    )
}