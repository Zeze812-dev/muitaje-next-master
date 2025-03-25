"use client"

import all from "@/components-assets/icons/menu-ico/all.png"
import hoodie from "@/components-assets/icons/menu-ico/hoodie.png"
import acc from "@/components-assets/icons/menu-ico/Acc.png"
import pants from "@/components-assets/icons/menu-ico/pants.png"
import top from "@/components-assets/icons/menu-ico/top.png"

import cart_empty from "@/components-assets/cart/cart_empty.svg" // TODO convert to png
import cart_full from "@/components-assets/cart/cart_full.svg" // TODO convert to png

import {useCart} from "@/app/store";
import Link from "next/link";
import Image from "next/image";


function MenuItem({ icon, name,page, className }) {
    return (
        <Link href={"../" + page}>
            <div className={`
                text-xl text-center w-12 
                transition-all justify-center
                align-items-center
                hovermenucatalog
                focus:bg-gray-200 focus:rounded-lg focus:p-1 
                hovermenucatalog2
                ${className}
            `}>
            <Image className="block w-12 min-w-10 min-h-14 h-full render" src={icon} alt="" />
            {name}
        </div>
        </Link>
    )
}


const CartBtn = () => {
    const cart = useCart((state) => state.cart)
    const icon = cart.length == 0 ? cart_empty : cart_full

    return (
        <Link href="../cart">
        <div className="text-xl text-center">
            <Image className="h-16 render" src={icon} alt=""/>
             Корзина

        </div>
        </Link>
    )
}

export function Menu() {
    return (
        <>
            <div className="flex justify-between mx-4 ">
                <div className="w-full overflow-x-scroll">
                    <div className="grid grid-cols-5 justify-center items-end gap-5 w-full ">
                        <MenuItem name="All"  page="catalog" icon={all}/>
                        <MenuItem name="Accery" page="accery" icon={acc}/>
                        <MenuItem name="Hoodie" page="hoodie" icon={hoodie}/>
                        <MenuItem className=" sm:block" page="pants" name="Pants" icon={pants}/>
                        <MenuItem className=" sm:block mr-4" page="top" name="Top" icon={top}/>
                    </div>
                </div>

                <CartBtn/>
            </div>
        </>
    )
}
