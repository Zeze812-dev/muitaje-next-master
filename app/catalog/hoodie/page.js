import hoodie_png from "@/assets/catalog/hoodie.png"
import hoodie_img2 from "@/assets/items/hoodie/hoodie1.webp"
import hoodie_img1 from "@/assets/items/hoodie/hoodie2.webp"
import hoodie_img3 from "@/assets/items/hoodie/hoodie3.webp"
import hoodie_img4 from "@/assets/items/hoodie/hoodie4.webp"
import hoodie_img5 from "@/assets/items/hoodie/hoodie5.webp"
import hoodie_img6 from "@/assets/items/hoodie/hoodie6.webp"
import hoodie_img7 from "@/assets/items/hoodie/hoodie7.webp"
import hoodie_img8 from "@/assets/items/hoodie/hoodie8.webp"
import hoodie_img9 from "@/assets/items/hoodie/hoodie9.webp"


import girl from "@/assets/items/hoodie/hoodie-girl.webp"

import {ItemPage} from "@/components/items/item_page";
import Image from "next/image";

export default function CatalogPage() {
    const size = ["S", "M", "L", "XL", "XXL"];
    const imgs = [hoodie_img2, hoodie_img1, hoodie_img3, hoodie_img4, hoodie_img5, hoodie_img6, hoodie_img7, hoodie_img8, hoodie_img9]
    const png = [hoodie_png]

    return (
        <>
            <title>Muiraje Hoodie</title>
            <ItemPage png={png} size={size} imgs={imgs} title="Catalog/Hoodie" itemName="COZY OVERSIZE GRAY HOODIE UNISEX"
                      about1="Отправка в течение 6-8 дней. Изготавливаюсь непосредственно в Санкт-Петербурге :)"
                      about2="Подчеркну вашу деловую сторону и обеспечу комфорт. С капюшоном для прохладных дней, удобным карманом и вышивкой, я стану важной частью вашего повседневного гардероба, добавляя стиль и уют к любой ситуации.
50% хлопок, 50% полиэстер, плотность: 305 г/м². "
                      price={4824}>

                <Image unoptimized width={350} height={1000} src={girl} alt="" className="absolute bottom-16 right-20  "/>
            </ItemPage>
        </>
    )
}
