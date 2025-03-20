import {Window} from "@/components/documents/window.jsx";
import logo from '@/components-assets/order/logodostavka.webp'
export default function DeliveryPage() {
    return (
        <>
            <title>Muiraje Delivery</title>
            <Window title="Documents/Delivery" logo={logo}>
                <div className="text-center flex flex-col items-center ">
                    <h1 className="text-7xl sm:text-9xl leading-[100px]">
                        Доставка.
                    </h1>
                    <ul className="text-xl text-left decoration-dotted divide-dotted w-10/12 list-[square] leading-5">
                        <li className="mb-8">Доступны два способа доставки. Первый вариант - доставка через компанию
                            СДЭК. Стоимость доставки рассчитывается индивидуально, для оформления заказа понадобится
                            ваше ФИО, номер телефона и адрес выбранного пункта выдачи. При оформлении доставки <a className="underline" href="https://www.cdek.ru/ru/">СДЭК</a>,
                            получение заказа происходит в выбранном покупателем ПВЗ <a className="underline" href="https://www.cdek.ru/ru/">СДЭК.</a>
                        </li>
                        <li>Второй способ - доставка курьерской службой {'"'}Мьюражер{'"'} (только по Санкт-Петербургу).
                            Стоимость доставки также рассчитывается индивидуально. Для оформления заказа потребуется
                            указать ФИО, номер телефона и адрес доставки. Также необходимо предоставить информацию о
                            времени и дате, когда вы сможете принять заказ.
                        </li>
                    </ul>
                    <p className="text-2xl pt-6">При сумме заказа от 12 424 рублей доставка осуществляется бесплатно, независимо от выбранного способа!</p>
                </div>
            </Window>
        </>

    )
}
