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
        // Запрашиваем текущее значение счетчика с сервера
        fetch('https://muiraje.ru/api/ordernumber')
            .then(response => response.json())
            .then(data => {
                setOrderNumber(data.orderNumber);
            })
            .catch(error => {
                console.error('Error fetching order number:', error);
            });
    }, []);

    return (
        <>
            <title>Order Number</title>

            <div className="block">
                <Window title="Your order" bg_bar="grey">
                    <main className="block justify-center text-center align-middle">
                        <div className="block w-2/4 m-auto align-middle justify-center">
                            <Image className="ordernumberw ordernumberh mx-auto" src={itworked2} alt="" />
                        </div>
                        <div className="w-full flex justify-center text-center">
                            <h2 className="text-8xl caret-colortxtcart2 pt-20 pb-20 justify-center content-center">{orderNumber}</h2>
                        </div>
                        <div className="block w-2/4 m-auto align-middle justify-center">
                            <Image className="h-40 mx-auto render" src={soon} alt="" />
                            <a href="https://t.me/care224radge" target="_blank" rel="noopener noreferrer">
                                <div className="flex pt-5 pb-0 justify-center content-center">
                                    <Image className="h-10 w-72 render" src={tg} alt="" />
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
