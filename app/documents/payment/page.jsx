import {Window} from "@/components/documents/window.jsx";

export default function PaymentsPage() {
    return (
        <>
            <title>Muiraje Paymants</title>
            <Window title="Documents/Payment">
                <div className="text-center flex flex-col items-center w-full px-5">
                    <h1 className="text-8xl sm:text-9xl  leading-[100px]">
                        Оплата.
                    </h1>
                    <ul className="text-xl text-left decoration-dotted divide-dotted list-[square] leading-5 list-inside">
                        <li className="mb-0">Мы работаем по 100% предоплате. Отправка заказа возможна только после полной оплаты заказа.
                        </li>
                        <li>Возможна оплата банковской картой или через сервисы Сбербанк Онлайн/Тинькофф/Альфа-Клик.</li>
                    </ul>
                </div>
            </Window>
        </>

    )
}