import { MiniBtn } from "../mini_btn";

import logo from "/components-assets/icons/pc_logo.svg"
import PropTypes from "prop-types";
import {BaseBar} from "../base_bar.jsx";
// import item_logo from "*.svg";

export function BlueBar({link = false, linkTo = "", title="", pic_logo=logo, color="bg-[#000C78]"}) {
    return (
        <>
            <BaseBar title={title} logo={pic_logo} bg="blue" linkTo={linkTo}/>
        {/*<div className={"flex h-8 items-center justify-between pl-1 " + color}>*/}
        {/*    <div className="flex items-center gap-2 text-white text-4xl ml-2 h-full ">*/}
        {/*        <img className="h-full p-[2px]" src={pic_logo} alt="" />*/}
        {/*        <div className="text-3xl">Muiraje <sup className="text-lg">8+8+8</sup> <span className="hidden sm:inline">{title}</span></div>*/}
        {/*    </div>*/}
        {/*    <div className="flex flex-row h-full p-[2px]">*/}
        {/*        <MiniBtn ico="min"/>*/}
        {/*        <MiniBtn ico="full"/>*/}
        {/*        <MiniBtn linkTo={linkTo} ico="close" />*/}
        {/*    </div>*/}
        {/*</div>*/}
        </>
    )
}

BlueBar.propTypes = {
    link: PropTypes.bool,
    linkTo: PropTypes.string,
    title: PropTypes.string,
}