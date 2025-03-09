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
                    <BaseBar title="Your (Good) choice" logo={logo} bg="grey" linkTo="../catalog"/>

                    <main className="px-2 sm:px-4 mt-3 ">
                      
                        <Image className="mb-5" src={HICartImg} alt=""/>
                        <div className="flex w-full">
                            <div className="block w-11/12">
                        {cart.length === 0 && <CartNull/>}
                        {cart.map(((item, index) => (
                            <CartItem key={index} index={index} item={item}/>
                        )))}
                        </div>
                        <div className="block w-1/3">
                        <Order cart={cart}/>

                        <div className="mt-3 relative">
                            <Image className="" src={men} alt=""/>
                            <Image className="absolute top-4 right-5" src={men_text} alt=""/>
                        </div>
                        </div>
   

                        </div>
                    </main>

                </WindowBorder>


            </div>
        </>

    )
}