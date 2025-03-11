"use client"
import React, { useEffect, useState } from 'react';
import itworked2 from "@/components-assets/order/itworked23.webp";
import soon from "@/components-assets/order/soon.webp";
import { Window } from '@/components/documents/window.jsx';
import Image from "next/image";
import tg from "@/components-assets/order/tgorder.webp"

const OrderNumber = () => {
    const [orderNumber, setOrderNumber] = useState(24000);

    useEffect(() => {
        const storedValue = localStorage.getItem('orderNumber');
        if (storedValue !== null) {
            setOrderNumber(parseInt(storedValue, 10));
        }
    }, []);

    useEffect(() => {
        if (orderNumber !== 24000) {
            localStorage.setItem('orderNumber', orderNumber.toString());
        }
    }, [orderNumber]);

    const incrementOrderNumber = () => {
        setOrderNumber(prev => prev + 1);
    };

    return (
        <>
            <title>Order Number</title>

            <div className="block">
                <Window title="Your order" bg_bar="grey">
                    <main className="block">
                        <div className="block">
                            <Image className="h-52 render" src={itworked2} alt="Order worked" />
                        </div>
                        <div className="w-full flex justify-center text-center">
                            <h2 className="text-9xl pt-20 pb-20 justify-center content-center">{orderNumber}</h2>
                        </div>
                        <div className="block">
                            <Image className="h-60 render" src={soon} alt="Coming soon" />
                            <div className="flex pt-5 pb-0 justify-center content-center">
                                <Image className="h-8 render" src={tg} alt="Telegram" />
                            </div>
                        </div>
                    </main>
                </Window>
            </div>
        </>
    );
};

export default OrderNumber;
