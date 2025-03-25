import lighter_img1 from "@/assets/items/blackwhitelighter/firebw1.webp"
import lighter_png from "@/assets/catalog/fire2.webp"
import lighter_img2 from "@/assets/items/blackwhitelighter/firebw2.webp"
import lighter_img3 from "@/assets/items/blackwhitelighter/firebw3.webp"
import lighter_img4 from "@/assets/items/blackwhitelighter/firebw4.webp"
import lighter_img5 from "@/assets/items/blackwhitelighter/firebw5.webp"
import lighter_img6 from "@/assets/items/blackwhitelighter/firebw6.webp"
import lighter_img7 from "@/assets/items/blackwhitelighter/firebw7.webp"
import lighter_img8 from "@/assets/items/blackwhitelighter/firebw8.webp"
import lighter_img9 from "@/assets/items/blackwhitelighter/firebw9.webp"

import girl from "@/assets/items/lighter/lighter-girl.webp"

import {ItemPage} from "@/components/items/item_page2";

import React from 'react';
import Image from "next/image";


export default function LighterPage() {
    const size = ["Black", "White"];
    const color = ["Blue", "Red"];
    const displayColor = color.map(item => item.replace(/_/g, ' '));
    const imgs = [lighter_img1, lighter_img2, lighter_img3, lighter_img4, lighter_img5, lighter_img6, lighter_img7, lighter_img8, lighter_img9]
    const png = [lighter_png]
    return (
        <>
            <title>Muiraje Lighter</title>
            <ItemPage  png={png} size={size} color={color} displayColor={displayColor} imgs={imgs} title="Catalog/Ligther" itemName="COZY BLACK AND WHITE LIGHTERS"
                      about1="Без ожиданий. В наличии. Доставка в любой день."
                      about2="Зажигалка - это не просто инструмент, а незаменимый спутник в любой ситуации, будь то романтический вечер при свечах, поход в горы или дружеская встреча на природе. А кастомизированные зажигалки подчеркивают индивидуальность владельца, превращаясь в стильный аксессуар, уникальный подарок и символ особенного отношения к деталям.
Матовое покрытие.
(ВНИМАНИЕ!!! Доступно только доставкой “Мьюражер” по Санкт-Петербургу)."
                      price={224}>
                <Image unoptimized width={600} height={1000} src={girl} alt="" className="absolute pt-5 sm:right-10 md768height3   phonetp phoneright0 heightphone   "/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

