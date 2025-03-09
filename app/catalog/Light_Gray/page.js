import pants_img1 from "@/assets/items/lightpants/lightpants1.webp"
import pantslight from "@/assets/catalog/lightpants.webp"
import pants_img2 from "@/assets/items/lightpants/lightpants2.webp"
import pants_img3 from "@/assets/items/lightpants/lightpants3.webp"
import pants_img4 from "@/assets/items/lightpants/lightpants4.webp"
import pants_img5 from "@/assets/items/lightpants/lightpants5.webp"
import pants_img6 from "@/assets/items/lightpants/lightpants6.webp"
import pants_img7 from "@/assets/items/lightpants/lightpants7.webp"
import girl from "@/assets/items/pants/pants-girl.webp"

import {ItemPage} from "@/components/items/item_page";

import React from 'react';
import Image from "next/image";


export default function PantsPage() {
    const size = ["S", "M"];
    const color = ["Light_Gray", "Dark_Gray"];

    const imgs = [pants_img1, pants_img2, pants_img3, pants_img4, pants_img5, pants_img6, pants_img7]
    const png=[pantslight]
    return (
        <>
            <title>Muiraje Light-Gray Pants</title>
            <ItemPage size={size} png={png} color={color} page="pants" imgs={imgs} title="Catalog/Pants" itemName="COZY OVERSIZE LIGHT GRAY PANTS UNISEX"
                      about1="Без ожиданий. В наличии. Отправка в течение 2-3 дней."
                      about2="Я — твой идеальный спутник на любой день! Моя свободная, оверсайз-посадка дарит абсолютную свободу движений, а продуманные детали — эластичный пояс, боковые карманы, удобные шнурки и регуляторы длины позволяют легко адаптировать меня под любой стиль: сделать штанины уже или шире, короче или длиннее. Спереди меня украшает вышивка логотипа бренда Muiraje.
Моя мягкая и эластичная ткань дарит комфорт, держит форму и остается безупречной даже после множества стирок. Натуральный хлопок добавляет мягкость, а полиэстер — прочность.
Мой нежно-серый оттенок легко сочетается с любыми вещами — от маек до худи.
Буду твоим лучшим выбором для отдыха, прогулок, танцев, и активного образа жизни.
80% хлопок, 20% полиэстер."
                      price={5624}>

                <Image unoptimized src={girl} alt="" className="absolute bottom-0 sm:right-10 sm:bottom-40 sm:w-96 z-5 md:w-[30rem] md:bottom-72"/>
                {/* <img src={girl} alt="" className="md:static z-10 w-52 absolute bottom-0 right-0 " /> */}


            </ItemPage>
        </>
    )
}

