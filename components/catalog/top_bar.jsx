"use client"

import logo from "@/components-assets/icons/pc_logo.svg"

import {useState} from "react";

import {BaseBar} from "@/components/base_bar";
import {NavMenu, NavMenuItem} from "@/components/catalog/nav_menu";


export function CatalogTopBar() {

    const [menuOpen, setOpen] = useState("");
    const handleOpen = (to) => menuOpen === to ? setOpen("") : setOpen(to);
    return (
        <>
            <BaseBar title="" logo={logo} linkTo="/"/>

            <nav className="text-2xl w-full border-b-2 border-white">
                <div className=" border-stone-500 border-b-2">
                    <button className="mx-3 relative leading-5" onClick={() => handleOpen("File")}>
                        <div>File</div>
                        <NavMenu name="File" openName={menuOpen}>

                            <NavMenuItem linkTo="https://t.me/mymiradge">Telegram</NavMenuItem>
                            <NavMenuItem disabled>Videos</NavMenuItem>
                        </NavMenu>
                    </button>
                    <button className="mx-3 relative leading-5" onClick={() => handleOpen("About")}>
                        About
                        <NavMenu name="About" openName={menuOpen}>
                            <NavMenuItem linkTo="/about">Muiraje</NavMenuItem>
                            <NavMenuItem linkTo={"/about/site"}>Site</NavMenuItem>
                            <NavMenuItem linkTo={"/about/collection"}>Collection</NavMenuItem>
                        </NavMenu>
                    </button>
                </div>
            </nav>
        </>
    )
}