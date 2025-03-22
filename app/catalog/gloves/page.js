import hoodie_img1 from "@/assets/items/gloves/gloves1.webp"
import hoodie_img2 from "@/assets/items/gloves/gloves2.webp"
import hoodie_img3 from "@/assets/items/gloves/gloves3.webp"
import hoodie_img4 from "@/assets/items/gloves/gloves4.webp"
import hoodie_img5 from "@/assets/items/gloves/gloves5.webp"
import hoodie_img6 from "@/assets/items/hoodie/hoodie6.webp"
import hoodie_img7 from "@/assets/items/gloves/gloves7.webp"
import hoodie_img8 from "@/assets/items/gloves/gloves8.webp"
import gloves from "@/assets/catalog/gloves.webp"
import girl from "@/assets/items/gloves/gloves_girl.webp"

import {ItemPage} from "@/components/items/item_pagegloves";
import Image from "next/image";

export default function CatalogPage() {
    const size = ["Phantom Color"];
    const imgs = [hoodie_img1, hoodie_img2, hoodie_img3, hoodie_img4, hoodie_img5, hoodie_img6, hoodie_img7, hoodie_img8,]
    const png=[gloves]

    return (
        <>
            <title>Muiraje Hoodie</title>
            <ItemPage size={size} png={png} imgs={imgs} title="Catalog/Hoodie" itemName="COZY BLUE GLOVES UNISEX"
                      about1="Без ожиданий. В наличии. Отправка в течение 2-3 дней.
"
                      about2="Я –  вязанные митенки голубого цвета. Идеально подойду для холодной зимы. У меня откидывающаяся верхняя часть, что позволяет держать пальцы открытыми, когда это необходимо – например, чтобы сделать снимок на Nokia или взять чашку горячего кофе с зефирками. На мне изображён рисунок – портрет девушки, воплощение загадочности.
Состав пряжи: 50%-шерсть, 50%-акрил.
Вышитые диалоги бизнесменов рассказывают истории, а когда меня надевают, я ощущаю, как человек становится другим — собранным, уверенным, готовым к любым испытаниям. Я не просто защищаю от холода, я придаю образу изысканность и силу.  "
                      price={2924}>

                <Image unoptimized width={1300} height={2000} src={girl} alt="" className=" absolute pt-5 w-fullphone sm:right-10  heightphonegirl400 mr-96 mrgloves1024px mrgloves1300 glovesgirlmr phonewidth phonetp350  phoneright0 heightphone350 topm0 widthgloves   "/>
            </ItemPage>
        </>
    )
}
