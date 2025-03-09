import Link from "next/link";

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

export const Order = ({cart}) => {
    const { totalPrice, totalCount } = calculateTotal(cart)
    return (
        <div className="p-2 bg-[#B5B5B5]">
            <input placeholder="Есть промокод?)" className="w-full text-center mb-2 bg-[#D9D9D9]"/>
            <div className="flex justify-between leading-3">
                <div>Товаров:</div>
                <div>{totalCount} ед.</div>
            </div>
            <div className="flex justify-between leading-3 mb-2 ">
                <div>{totalPrice} руб.</div>
                <div>Итог:</div>
            </div>
            {(cart.length > 0) ? (
                <button className="w-full h-10 bg-[#878787] text-white text-2xl "><Link
                    className="h-full w-full inline-block" href="/order">Оформить!</Link></button>
            ) : ( <button className="w-full h-10 bg-[#878787] text-white text-2xl ">Оформить!</button> )
            }


        </div>
    )
}