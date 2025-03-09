import item_logo from "@/assets/catalog/item_logo.svg"
import {BaseBar} from "@/components/base_bar.jsx";

export function GreyBar({title}) {
    return (
        <>
            <BaseBar title={title} logo={item_logo} bg="grey" linkTo="../catalog"/>
            {/*<div className="h-8 w-full bg-stone-400 text-white flex justify-between sticky top2-0 z-20">*/}
            {/*    <div className="flex items-center">*/}
            {/*        <img className=" inline-block h-full p-1" src={item_logo} alt="" />*/}
            {/*        /!* <img className=" inline-block" src={muiraje} alt="" /> *!/*/}
            {/*        /!*tracking-[-0.07rem] font-basic33*!/*/}
            {/*        <h5 className="  text-2xl  inline-block text-shadow">Muiraje <sup>8+8+8</sup> <span className="hidden sm:inline">{title}</span></h5>*/}
            {/*        */}

            {/*    </div>*/}
            {/*    <div className="h-full p-[2px] flex-row flex ">*/}
            {/*        /!* <SmallBtn ico={min}/> *!/*/}
            {/*        <MiniBtn ico="min"/>*/}
            {/*        <MiniBtn ico="full"/>*/}
            {/*        <MiniBtn link={true} linkTo={"/catalog/"} ico="close" />*/}
            {/*    </div>*/}
            {/*</div>*/}
            
        </>
    )
}