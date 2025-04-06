"use client"

import { GreyBar } from "@/components/items/grey_bar"
import { MyCaruel } from "@/components/items/carusel";
import { WinButton } from "@/components/mini_btn"
import {PopupWarn} from "@/components/popupWarn.jsx";

import { useCart } from "@/app/store.js"

import { useState } from "react";
import Image from "next/image";
import FullCarusel from "@/components/items/fullCarusel";
import {PopupToCart} from "@/components/popupToCart";

export function ItemPage({ children, size = [], color = [], displayColor = [], png = [], title = "", page = "", itemName = "", imgs = [], about1 = "", about2 = "", price = 0 }) {
    const addItem = useCart((state) => state.addToCart);
    const [popupOpen, setPopup] = useState(false);
    const [popupOpenCart, setPopupCart] = useState(false);
    const [selSize, setSize] = useState("");
    const [selColor, setColor] = useState("");

    const [open, setOpen] = useState(false);
    const [selImg, setSelImg] = useState(0);

    const handleOpen = (s) => selSize === s ? setSize("") : setSize(s);
    const handleOpen2 = (c) => {
        selColor === c ? setColor('') : setColor(c);
        window.location.href = `/catalog/${c}`;
    };

    const canAddItem = ((selSize !== "") || (size.length === 0));

    const addToCartAndOpenPopup = () => {
        if (canAddItem) {
            addItem({ name: itemName, price: price, size: selSize, img: png[0] });
            setPopupCart(true);
            return;
        }
        setPopup(true);
    };

    return (
        <>
            <FullCarusel imgs={imgs} png={png} open={open} setOpen={setOpen} selImg={selImg} />
            <div className="relative bg-gradient-dark text-white overflow-auto heightphoneallitems h-screen">
                <div className="relative  ">
                    <div className="text-shadow text-stroketitle font-basic33">
                    <GreyBar title={title}  />
                    </div>
                    <h1 className="text-4xl text-shadow sm:text-7xl  mltxtphone mltxtnotphone mx-14">
                        {itemName}
                    </h1>

                    <div className=" sm:flex md:px-10">
                        <div className="flex justify-center">
                            <div className="w-full px-4 widthcarusel">
                                <MyCaruel>
                                    {imgs.map((p, index) => (
                                        <div onClick={() => {
                                            setSelImg(index);
                                            setOpen(true);
                                        }} key={index}>
                                            <Image className="" alt="" src={p} />
                                        </div>
                                    ))}
                                </MyCaruel>
                            </div>
                        </div>

                        <div className=" text-shadow phonewidthtxt static640 phoneabsolute otherposition minwidthtxt text-2xl mx-3 text-in max-w-4xl z-10 clear-right">
                            <p className="z-20">
                                WAIT FOR ME: <br />
                                {about1}
                            </p>
                            <p className=" text-shadow my-5">
                                ABOUT ME: <br />
                                {about2}
                            </p>

                            <p className= "text-shadow ">
                                MY PRICE: <br />
                                {price} руб.
                            </p>
                        </div>
                        <div className="absolute w-1/3 clear-right h-96 phoneright0  " >
                            <div className="relative w-full h-96">
                        {children}
                        </div>
                        </div>
                    </div>

                    <div className="phonemarginb500 topm0 mb-96 h-80 absolute w-full flex justify-center text-center">
                        <div className="z-20">
                            <WinButton onClick={addToCartAndOpenPopup}>I want it!</WinButton>

                            {(size.length !== 0) && "Choose your size"}
                            <div className="flex justify-center gap-2 text-3xl">
                                {size.map((s, index) => (
                                    <button
                                        data-select={selSize === s}
                                        className="data-[select=true]:underline"
                                        key={index}
                                        onClick={() => handleOpen(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>

                            {(color.length !== 0) && "Choose your color"}
                            <div className="flex justify-center gap-2 text-2xl">
                                {color.map((c, index) => (
                                    <button
                                        data-select={selColor === c}
                                        className="data-[select=true]:underline"
                                        key={index}
                                        onClick={() => handleOpen2(c)}
                                    >
                                        {displayColor[index]} {/* Используем displayColor для отображения текста */}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {popupOpen && <PopupWarn setOpen={setPopup} msg="Сначала нужно выбрать размер!" btn_msg="Окей, ща выберу." />}
            {popupOpenCart && <PopupToCart setOpen={setPopupCart} msg="Товар в корзине!" btn_msg="Окей, ща выберу" />}
        </>
    );
}
