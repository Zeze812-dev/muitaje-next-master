"use client"
import React, { useState, useEffect } from 'react';
import './OrderNumber.css';
import itworked2 from '@/components-assets/order/itworked23.webp';
import soon from '@/components-assets/order/soon.webp';
import { Window, WindowBorder } from '@/components/documents/window.jsx';
import Image from 'next/image';
import tg from "@/components-assets/order/tgorder.webp"

const OrderNumber = () => {
    const [orderNumber, setOrderNumber] = useState(() => {
        const storedValue = localStorage.getItem('orderNumber');
        if (storedValue !== null) {
            return parseInt(storedValue, 10);
        }
        return 24000;
    });
    useEffect(() => {
        const newOrderNumber = orderNumber + 1;
        localStorage.setItem('orderNumber', newOrderNumber.toString());
        setOrderNumber(newOrderNumber);
    }, []);

    return (
        <>
            <title>Order Number</title>

            <div className="block">
                <Window title="Your order" bg_bar="grey">
                    <main className="block">
                        <div className="block">
                            <Image className="h-52 render" src={itworked2} alt="" />
                        </div>
                        <div className="w-full flex justify-center text-center">
                        <h2 className=" text-9xl pt-20 pb-20 justify-center content-center">{orderNumber}</h2>
                        </div>
                            <div className="block">
                            <Image className="h-60 render" src={soon} alt="" />
                                <div className="flex pt-5 pb-0 justify-center content-center">
                                <Image className="h-8 render " src={tg} alt="" />
                                </div>
                                </div>
                    </main>
                </Window>
            </div>
        </>
    );
};

export default OrderNumber;