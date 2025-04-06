"use client"
import React, { useState, useEffect } from 'react';
import './OrderNumber.css';
import logo from "@/assets/logoorder.webp"
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
                <Window title="Your order" bg_bar="grey" logo={logo}>
                    <main className="block justify-center text-center align-middle">
                        <div className="block w-2/4 m-auto align-middle justify-center">
                            <h2 className="  ordercolor txtorderphone text-justify fontsizetxtorder lineheightordernumberphone2 ">It Worked, yay!</h2>
                                <h2 className="ordercolor txtorderphone text-justify fontsizetxtorder lineheightordernumberphone lineheightordernumberphone2 ">Here's your order number:</h2>
                        </div>
                        <div className="w-full flex justify-center text-center">
                            <h2 className="text-8xl caret-colortxtcart2 pt-20 pb-20 justify-center content-center">{orderNumber}</h2>
                        </div>
                        <div className="block w-2/4 m-auto align-middle justify-center">
                            <h2 className=" ordercolor text-justify txtorderphone fontsizetxtorder lineheightordernumberphone lineheightordernumberphone2 ">Скоро с вами свяжется Care для уточнения деталей в Telegram! :)</h2>

                                <div className="flex pt-5 pb-0 justify-center content-center">
                                    <a href="https://t.me/care224radge" target="_blank" rel="noopener noreferrer" className="ordercolor ordertgfont  text-justify fontsizetxtorder ">https://t.me/care224radge</a>
                                </div>

                        </div>
                    </main>
                </Window>
            </div>
        </>
    );
};

export default OrderNumber;