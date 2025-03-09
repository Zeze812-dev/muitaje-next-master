'use client';
import topHover from "@/assets/catalog/top.webp"
import top from "@/assets/catalog/tophover.webp"
import hoodie from "@/assets/catalog/hoodie.webp"
import pantsHover from "@/assets/catalog/pants.webp"
import pants from "@/assets/catalog/lightpants.webp"
import fireHover from "@/assets/catalog/fire.webp"
import fire from "@/assets/catalog/fire2.webp"
import perc from "@/assets/catalog/перчатки.webp"
import podv from "@/assets/catalog/necklace.webp"

import {PopupWarn} from "../popupWarn.jsx";
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import NecklacePage from "@/app/catalog/necklace/page";


function Item({ name, price, page, image, hoverImage }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true); // Меняем состояние при наведении
    };

    const handleMouseOut = () => {
        setIsHovered(false); // Возвращаем исходное состояние при уходе мыши
    };
    return (
        <Link className="hover:bg-stone-100 m-2 leading-3" href={"/catalog/" + page}>
            <Image className="mb-2"
                   src={isHovered ? hoverImage : image} // Условие для смены изображения
                   alt={name}
                   width={420}
                   height={200}
                   onMouseEnter={handleMouseOver}
                   onMouseLeave={handleMouseOut}
            />
            <p className="">{name} </p>
            <p>{price} руб.</p>
        </Link>

    )
}


export function Catalog() {
    return (
        <>

            <div className="mx-3 mb-3 bg-white border-r-2 border-b-2 border-stone-100 overflow-auto flex-1">
                <div className=" border-l-2 border-t-2 border-stone-400">
                    <div className="border-r-2 border-b-2 border-stone-300">
                        <main className="border-l-2 border-t-2 border-stone-600 p-4 grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4">

                            <Item image={pants} hoverImage={pantsHover} page="Light_Gray" name="COZY OVERSIZE GRAY PANTS UNISEX" price="5824" />

                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}