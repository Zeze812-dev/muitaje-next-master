import pants_img1 from "@/assets/items/pants/pants1.webp"
import pantsdark from "@/assets/catalog/pants.webp"
import pants_img2 from "@/assets/items/pants/pants2.webp"
import pants_img3 from "@/assets/items/pants/pants3.webp"
import pants_img4 from "@/assets/items/pants/pants4.webp"
import pants_img5 from "@/assets/items/pants/pants5.webp"
import pants_img6 from "@/assets/items/pants/pants6.webp"
import girl from "@/assets/items/pants/pants-girl.webp"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function PantsPage() {
    const size = ["S", "L","M"];
    const color = ["Light_Gray", "Dark_Gray"];

    const displayColor = color.map(item => item.replace(/_/g, ' '));
    const imgs = [pants_img1, pants_img2, pants_img3, pants_img4, pants_img5, pants_img6]
    const png=[pantsdark]
    return (
        <>
            <title>Muiraje Pants</title>
            <ItemPage size={size} png={png} color={color} displayColor={displayColor} imgs={imgs} title="Catalog/Pants" itemName="COZY OVERSIZE GRAY PANTS UNISEX"
                      about1="Без ожиданий для S, M. Отправка в течение 2-3 дней. В наличии 2шт (1 шт - S, 1 шт - M). "
                      about2="В стиле 2000-х с боковыми карманами, эластичным поясом, верёвочками и имитацией ширинки. Я соткан из мягкого, бархатистого на ощупь трикотажа, а мой тёмно-графитовый оттенок добавляет образу утончённости. Моя ткань сохраняет свою форму и не деформируется даже после многочисленных стирок. А спереди на мне есть вышивка названия бренда Muiraje. Идеально подхожу для того, чтобы дарить комфорт уют в те моменты, когда после долгого дня хочется расслабиться и почувствовать тепло.
Также отлично подхожу для йоги, танцев и любой активности, где важны свобода движений и удобство.
Хлопок 100%."

                      price={5624}>

                <Image unoptimized src={girl} alt="" className="absolute bottom-0 sm:right-10 sm:bottom-40 sm:w-96 md:w-[30rem] md:bottom-72"/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}
            </ItemPage>
        </>
    )
}

