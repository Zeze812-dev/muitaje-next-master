'use client';
import topHover from "@/assets/catalog/top.webp"
import top from "@/assets/catalog/tophover.webp"
import hoodie from "@/assets/catalog/hoodie.webp"
import pantsHover from "@/assets/catalog/pants.webp"
import pants from "@/assets/catalog/lightpants.webp"
import fireHover from "@/assets/catalog/fire.webp"
import fire from "@/assets/catalog/fire2.webp"
import perc from "@/assets/catalog/gloves.webp"
import perc2 from "@/assets/catalog/gloveshover.webp"
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

            <div className="mx-3 mb-3 bg-white border-r-2 border-b-2  border-stone-100 overflow-auto flex-1">
                <div className=" border-l-2 heightother border-t-2 border-stone-400">
                    <div className="border-r-2 heightother border-b-2 border-stone-300">
                        <main className=" font-basis33 heightphoneaccery border-l-2 border-t-2 heightother border-stone-600 p-4 grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4">
                            <Item image={perc} hoverImage={perc2} page="gloves" name="COZY BLUE GLOVES UNISEX" price="2924" />
                            <Item image={podv} hoverImage={podv} page="necklace" name="COZY SILVER NECKLACE UNISEX" price="8424" />
                            <Item image ={fire} hoverImage={fireHover} page="Black" name="COZY MULTI-COLORED LIGHTERS" price="224"/>
                        </main>
                    </div>
                </div>
            </div>

        </>
    )
}