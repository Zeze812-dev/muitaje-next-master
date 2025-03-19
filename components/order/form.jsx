"use client"

import Image from "next/image";
import whoareyou from "@/components-assets/order/Who are you_.png";
import Input from "@/components/order/input";
import delivery from "@/components-assets/order/Delivery..png";
import thatsriht from "@/components-assets/order/Thatright.png";
import Link from "next/link";
import { useCart } from "@/app/store";
import check from "@/components-assets/order/check.svg"
import nocheck from "@/components-assets/order/nocheck.svg"
import {orderHandler} from "@/components/order/orderHandler";

export async function FormContent({orderHandler}) {

    const cart = useCart((state) => state.cart)

    const calculateTotal = (cart) => {
        return cart.reduce(
            (acc, item) => {
                acc.totalPrice += item.price;
                acc.totalCount += 1;
                return acc;
            },
            { totalPrice: 0, totalCount: 0 }
        );
    };
//
    const { totalPrice, totalCount } = calculateTotal(cart)

    async function action(formData) {
        if (typeof orderHandler !== 'function') {
            console.error('orderHandler is not a function');
            return;
        }
        await orderHandler(formData, cart);
    }

    return (<>
        <form action={action} className=" flex flex-col items-center w-full px-5">

            <Image className="h-12 render" src={whoareyou} alt=""/>

            <Input required name="name">Получатель (ФИО полностью)</Input>
            <Input required type="email" name="email">Email</Input>
            <Input required type="number" name="phone">Телефон</Input>

            <Image className="h-11 mt-10" src={delivery} alt=""/>

            <Input required>Ваш Выберите пункт получения СДЭК</Input>
            <div className="w-3/5">


                <label className="flex justify-between" htmlFor="sdec">
                    <div>
                        <input className=" appearance-none peer " name="deliver" id="sdec" type="radio"
                               value="СДЭК" defaultChecked/>
                        <Image src={nocheck} alt="" className="render h-3 w-3 mb-1 mr-1 inline peer-checked:hidden"/>
                        <Image src={check} alt="" className="render h-3 w-3 mb-1 mr-1 hidden peer-checked:inline"/>
                        Самовывоз СДЭК (по России)
                    </div>
                    <p>от 2 дней, от 224 руб.</p>
                </label>

                <label className="flex justify-between" htmlFor="spb">
                    <div>
                        <input className=" appearance-none peer " name="deliver" id="spb" type="radio"
                               value="Мьюражер"/>
                        <Image src={nocheck} alt="" className="render h-3 w-3 mb-1 mr-1 inline peer-checked:hidden"/>
                        <Image src={check} alt="" className="render h-3 w-3 mb-1 mr-1 hidden peer-checked:inline"/>
                        Мьюражер (по Санкт-Петербургу)
                    </div>
                    <p>424 руб.</p>
                </label>

                <h3>Комментарий к заказу</h3>
                <textarea name="coments"
                          className="w-full bg-stone-300 border-l-2 border-t-2 border-stone-400 hover:outline-0"/>


                <Image className="mx-auto render h-10 mt-8" src={thatsriht} alt=""/>

                <p className="leading-4 mb-3">
                    {/*Сумма: {totalPrice} руб. <br/>*/}
                    {/*Самовывоз СДЭК: 224 руб.<br/>*/}
                    {/*Россия, г Санкт-Петербург, пр-т Культуры, 19, пом. 21-н<br/>*/}
                    Итоговая сумма: {totalPrice} руб.
                </p>

                <button disabled={!cart.length > 0} className="w-full h-10 bg-stone-500 text-xl text-white border-r-2 border-b-2 border-stone-600"
                        type="submit">
                    Подтвердить заказ.
                </button>
                <p className="leading-4 text-center">
                    Оформляя заказ вы соглашаетесь с
                    <Link className="text-stone-500" href="/documents"> договором оферты </Link> и
                    <Link className="text-stone-500" href="/documents"> политикой конфиденциальности. </Link>
                </p>

            </div>
        </form>
        </>
    )
}
