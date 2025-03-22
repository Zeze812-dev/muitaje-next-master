import necklace1 from "@/assets/items/necklace/necklace1.webp"
import necklace from "@/assets/catalog/necklace.webp"
import necklace2 from "@/assets/items/necklace/necklace2.webp"
import necklace3 from "@/assets/items/necklace/necklace3.webp"
import necklace4 from "@/assets/items/necklace/necklace4.webp"
import necklace5 from "@/assets/items/necklace/necklace5.webp"
import necklace6 from "@/assets/items/necklace/necklace6.webp"
import necklace7 from "@/assets/items/necklace/necklace7.webp"
import necklace8 from "@/assets/items/necklace/necklace8.webp"
import necklace9 from "@/assets/items/necklace/necklace9.webp"
import necklace10 from "@/assets/items/necklace/necklace10.webp"
import necklace11 from "@/assets/items/necklace/necklace11.webp"
import girl from "@/assets/items/necklace/necklace_girl.webp"

import {ItemPage} from "@/components/items/item_pagenecklace";

import React from 'react';
import Image from "next/image";


export default function NecklacePage() {
    const size = ["ONE SIZE"];
    const imgs = [necklace1, necklace2, necklace3, necklace4, necklace5, necklace6, necklace7, necklace8, necklace9, necklace10, necklace11]
    const png=[necklace]
    return (
        <>
            <title>Muiraje Necklace</title>
            <ItemPage size={size}  png={png} imgs={imgs} title="Catalog/Necklace" itemName="COZY SILVER NECKLACE UNISEX"
                      about1="Ожидание 3-4 недели. Украшение изготавливается под заказ :)"
                      about2="Я — серебряная подвеска, созданная, чтобы подчеркнуть твою уникальность и стать твоей незаменимой спутницой. Добавляю изысканности и легко сочетаюсь как с деловым гардеробом, так и с повседневными нарядами. Со мной ваш деловой образ будет завершённым, а на встречах и презентациях я точно привлеку внимание. Коллеги будут в шоке от того, как гармонично мы смотримся вместе. Возьми меня с собой, и я помогу тебе переосмыслить элегантность.
Состав: серебро 925. Длина цепочки: 45 см.
Размер подвески: 2.4 см - длина, 3.3 см - высота."
            price={8424}>

                <Image unoptimized src={girl} alt="" className=" absolute pt-5 sm:right-10 md768height1 heightphonenecklace widthnecklace phonewidth phonetp600 phoneright0 heightphone topm0   "/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

