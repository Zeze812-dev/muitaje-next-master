
import {Window, WindowBorder} from "@/components/documents/window.jsx";
import whoareyou from "@/components-assets/order/Who are you_.png";
import delivery from "@/components-assets/order/Delivery..png";
import thatsriht from "@/components-assets/order/Thatright.png";
import {useCart} from "@/app/store.js";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/order/input";
import FormContent from "@/components/order/form";
import {orderHandler} from "@/components/order/orderHandler";
//
// async function orderHandler(formData) {
//     'use server'
//
//     console.log(formData)
// }


export default function OrderPage() {
    // const cart = useCart((state) => state.cart)

    return (
        <>
            <title>YOU ORDER</title>

            <div className="min-h-screen relative">
                <Window title="Your order" bg_bar="grey">

                       <FormContent />


                </Window>

                <h1>После подтверждения заказа с вами свяжется Care для уточнения деталей! :)</h1>

            </div>
        </>

    )
}