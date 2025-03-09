import hoodie_img1 from "@/assets/items/hoodie/hoodie1.webp"
import hoodie_img2 from "@/assets/items/hoodie/hoodie2.webp"
import hoodie_img3 from "@/assets/items/hoodie/hoodie3.webp"
import hoodie_img4 from "@/assets/items/hoodie/hoodie4.webp"
import hoodie_img5 from "@/assets/items/hoodie/hoodie5.webp"
import hoodie_img6 from "@/assets/items/hoodie/hoodie6.webp"
import hoodie_img7 from "@/assets/items/hoodie/hoodie7.webp"
import hoodie_img8 from "@/assets/items/hoodie/hoodie8.webp"
import hoodie_img9 from "@/assets/items/hoodie/hoodie9.webp"

import girl from "@/assets/items/gloves/gloves_girl.webp"

import {ItemPage} from "@/components/items/item_page";
import Image from "next/image";

export default function CatalogPage() {
    const size = ["Phantom Color"];
    const imgs = [hoodie_img1, hoodie_img2, hoodie_img3, hoodie_img4, hoodie_img5, hoodie_img6, hoodie_img7, hoodie_img8, hoodie_img9]

    return (
        <>
            <title>Muiraje Hoodie</title>
            <ItemPage size={size} imgs={imgs} title="Catalog/Hoodie" itemName="COZY BLUE GLOVES UNISEX"
                      about1="Без ожиданий. В наличии. Отправка в течение 2-3 дней.
"
                      about2="Я –  вязанные митенки голубого цвета. Идеально подойду для холодной зимы. У меня откидывающаяся верхняя часть, что позволяет держать пальцы открытыми, когда это необходимо – например, чтобы сделать снимок на Nokia или взять чашку горячего кофе с зефирками. На мне изображён рисунок – портрет девушки, воплощение загадочности.
Состав пряжи: 50%-шерсть, 50%-акрил.
Вышитые диалоги бизнесменов рассказывают истории, а когда меня надевают, я ощущаю, как человек становится другим — собранным, уверенным, готовым к любым испытаниям. Я не просто защищаю от холода, я придаю образу изысканность и силу.  "
                      price={2924}>

                <Image unoptimized width={1300} height={2000} src={girl} alt="" className="absolute bottom-24 right-60  "/>
            </ItemPage>
        </>
    )
}
