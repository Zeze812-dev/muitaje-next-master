import top_img1 from "@/assets/items/whitetop/tankw1.webp"
import topwhite from "@/assets/catalog/tophover.webp"
import top_img2 from "@/assets/items/whitetop/tankw2.webp"
import top_img3 from "@/assets/items/whitetop/tankw3.webp"
import top_img4 from "@/assets/items/whitetop/tankw4.webp"
import top_img5 from "@/assets/items/whitetop/tankw5.webp"
import top_img6 from "@/assets/items/whitetop/tankw6.webp"

import girl from "@/assets/items/top/top-girl.webp"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function TopPage() {
    const size = ["S", "M", "L", "XL"];
    const color = ["White_Top", "Gray_Top"];
    const imgs = [top_img1, top_img2, top_img3, top_img4, top_img5, top_img6]
    const png=[topwhite]
    return (
        <>
            <title>Muiraje Top</title>
            <ItemPage size={size} png={png} color={color} imgs={imgs} title="Catalog/Top" itemName="COZY WHITE TANK TOP SLIM"
                      about1="Отправка в течение 7 дней. Изготавливаюсь непосредственно в Санкт-Петербурге :)"
                      about2="Легко сочетаюсь с элементами гардероба, помогая создавать разнообразные образы.(Вы можете выбрать длину майки из списка или указать желаемую длину в комментарии при оформлении заказа). Хлопок 100%. "
                      price={2624}>
                <Image unoptimized width={350} height={1000} src={girl} alt="" className="absolute bottom-36 right-20  "/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

