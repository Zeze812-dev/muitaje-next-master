"use client"
import React, { useState, useEffect } from 'react';
import './OrderNumber.css';
import itworked2 from '@/components-assets/order/itworked23.webp';
import soon from '@/components-assets/order/soon.webp';
import { Window, WindowBorder } from '@/components/documents/window2.jsx';
import Image from 'next/image';
import tg from "@/components-assets/order/tgorder.webp"

const OrderNumber = () => {
    const [orderNumber, setOrderNumber] = useState(24000);

    useEffect(() => {
        // Проверяем, что код выполняется в браузере
        if (typeof window !== "undefined") {
            // Получаем текущее значение из localStorage
            const storedValue = localStorage.getItem('orderNumber');
            let initialOrderNumber = storedValue !== null ? parseInt(storedValue, 10) : 24000;

            // Увеличиваем значение на 1
            const newOrderNumber = initialOrderNumber + 1;

            // Сохраняем новое значение в localStorage
            localStorage.setItem('orderNumber', newOrderNumber.toString());

            // Устанавливаем новое значение в состояние
            setOrderNumber(newOrderNumber);
        }
    }, []); // Пустой массив зависимостей гарантирует, что useEffect сработает только один раз

    return (
        <>
            <title>Order Number</title>

            <div className="block">
                <Window title="Your order" bg_bar="grey">
                    <main className="block justify-center text-center align-middle">
                        <div className="block w-2/4 m-auto align-middle justify-center">
                            <Image className="h-32 mx-auto" src={itworked2} alt="" />
                        </div>
                        <div className="w-full flex justify-center text-center">
                            <h2 className="text-8xl fill:#1200ff pt-20 pb-20 justify-center content-center">{orderNumber}</h2>
                        </div>
                        <div className="block w-2/4 m-auto align-middle justify-center">
                            <Image className="h-34 mx-auto render" src={soon} alt="" />
                            <a href="https://t.me/care224radge" target="_blank" rel="noopener noreferrer">
                                <div className="flex pt-5 pb-0 justify-center content-center">
                                    <Image className="h-8 render" src={tg} alt="" />
                                </div>
                            </a>
                        </div>
                    </main>
                </Window>
            </div>
        </>
    );
};

export default OrderNumber;
