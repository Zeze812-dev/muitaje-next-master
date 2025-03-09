import lighter_img1 from "@/assets/items/lighter/lighter1.webp"
import lighter_png from "@/assets/catalog/fire.webp"
import lighter_img2 from "@/assets/items/lighter/lighter2.webp"
import lighter_img3 from "@/assets/items/lighter/lighter3.webp"
import lighter_img4 from "@/assets/items/lighter/lighter4.webp"
import lighter_img5 from "@/assets/items/lighter/lighter5.webp"
import lighter_img6 from "@/assets/items/lighter/lighter6.webp"
import lighter_img7 from "@/assets/items/lighter/lighter7.webp"
import lighter_img8 from "@/assets/items/lighter/lighter8.webp"
import lighter_img9 from "@/assets/items/lighter/lighter9.webp"
import girl from "@/assets/items/lighter/lighter-girl.webp"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function LighterPage() {
    const size = ["Red", "Blue"];
    const color = ["Black", "White"];
    const imgs = [lighter_img1, lighter_img2, lighter_img3, lighter_img4, lighter_img5, lighter_img6, lighter_img7, lighter_img8, lighter_img9]
    const png=[lighter_png]
    return (
        <>
            <title>Muiraje Lighter</title>
            <ItemPage png={png}  size={size} color={color} imgs={imgs} title="Catalog/Ligther" itemName="COZY BLUE AND RED  LIGHTERS"
                      about1="Без ожиданий. В наличии. Доставка в любой день."
                      about2="Зажигалка - атрибут успешного человека, который всегда готов к вызову и может пробудить огонь в своей душе. Не забывайте о силе и мощи, которую дает вам эта маленькая, но такая значимая вещь.
Глянцевое покрытие.
(ВНИМАНИЕ!!! Доступно только доставкой “Мьюражер” по Санкт-Петербургу)."
                      price={224}>
                <Image unoptimized src={girl} alt="" className=" absolute -bottom-14 right-0 sm:w-[30rem] sm:bottom-10 md:bottom-36 lg:right-20"/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

