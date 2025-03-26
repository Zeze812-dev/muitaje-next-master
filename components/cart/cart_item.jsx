import {useCart} from "@/app/store.js";
import dot from "@/components-assets/cart/dot.svg";
import Image from "next/image";

function Dots() {
    return (
        <div className="flex flex-row flex-wrap gap-1 w-full max-h-[5px] overflow-hidden">
            {Array.from({length: Math.floor(window.innerWidth / 5)}, (_, index) => (
                <Image width="5" height="5" key={index} src={dot} alt=""/>
            ))}
        </div>
    )
}

export const CartItem = ({item, index}) => {
    
    const remoweFromCart = useCart((state) => state.removeItem)
    const {name, size, price, img} = item

    return (
        <div className="flex  flex-nowrap gap-3 mb-3">
            {/*<div className="min-w-32 h-32 bg-gray-300"/>*/}
            <Image src={img} unoptimized className="min-w-32 w-52 h-52 " alt=""/>
            <div className="block  cartitemminw">
                <div className="text-2xl leading-4">{name}</div>
                <div className="flex flex-row gap-2 justify-between items-center">
                    <div className="text-xl whitespace-nowrap">{size}</div>
                    <Dots/>
                    <div className="text-xl whitespace-nowrap pr-24">{price} руб.</div>
                </div>
                <div className="ml-auto flex gap-1 ">
                    {}
                    <button onClick={() => remoweFromCart(index)}>🗑️</button>
                </div>
            </div>

        </div>
    )
}
