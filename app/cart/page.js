"use client"

import {BaseBar} from "@/components/base_bar.jsx";
import {WindowBorder} from "@/components/documents/window.jsx";
import {CartItem} from "@/components/cart/cart_item.jsx";
import {Order} from "@/components/cart/order.jsx";

import HICartImg from "@/components-assets/cart/hi_cart.svg"
import men from "@/assets/gif/men_return.webp"
import men_text from "@/components-assets/cart/man_text.svg"
import logo from "@/components-assets/cart/iconminicomp.webp"

import {useCart} from "@/app/store.js";
import Image from "next/image";


const CartNull = () => {
    return (
        <div className="text-2xl mb-5 text-center">
            Корзина пустая :(
        </div>
    )
}

export default function CartPage() {
    const cart = useCart((state) => state.cart)

    return (
        <>
            <title>YOU CART</title>

            <div className="h-screen relative">
                <WindowBorder>
                    <div className="pr-2 pl-2 pt-1">
                    <BaseBar title="Your (Good) choice" logo={logo} classname="ml-5" bg="grey" linkTo="../catalog"/>
                    </div>
                    <main className="px-2 sm:px-4 mt-3 ">
                      
                        <Image className="mb-5" src={HICartImg} alt=""/>
                        <div className="cartflex cartblock w-full">
                            <div className="block w-11/12">
                        {cart.length === 0 && <CartNull/>}
                        {cart.map(((item, index) => (
                            <CartItem key={index} index={index} item={item}/>
                        )))}
                        </div>
                        <div className="block widthordercart cartwfull">
                        <Order cart={cart}/>

                        <div className="mt-3 relative">
                            <Image className="" src={men} alt=""/>
                            <Image className="absolute top-4 right-5" src={men_text} alt=""/>
                        </div>
                        </div>
   

                        </div>
                    </main>

                    <div className=" caret-colortxtcart absolute  text-2xl flex justify-center w-full bottomcarttxt align-middle ml-auto text-center left-auto right-auto items-center h-fit">
                        <div className="mb-5">
                        <h2 className="caret-colortxtcart text-xl">При сумме заказа от 12424 рублей доставка осуществляется бесплатно, независимо от выбранного способа!</h2>
                        </div>
                            <div className="caret-colortxtcart absolute mt-4 gap-16 text-xl pr-20 flex justify-center w-full bottomcarttxt align-middle ml-auto text-center left-auto right-auto items-center h-fit"> <br />
                        <a href="documents/delivery">Доставка</a>
                                <a href="documents/payment">Оплата</a>
                                <a href="documents/contact">Контакты</a>
                                <a href="documents">Оферта и политика конфиденциальности</a>
                        </div>
                    </div>
                </WindowBorder>


            </div>
        </>

    )
}
