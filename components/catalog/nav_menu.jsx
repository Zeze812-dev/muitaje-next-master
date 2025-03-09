import Link from "next/link";

export function WindowBorder({children}) {
    return (
        <>
            <div className="w-full h-full border-stone-700 border-r-2 border-b-2">
                {/*<div className="w-full h-full border-stone-200 border-l-2 border-t-2">*/}
                <div className="w-full h-full border-stone-100 border-l-2 border-t-2">
                    <div className="w-full h-full border-stone-500 border-r-2 border-b-2">

                        {children}
                    </div>
                </div>
                {/*</div>*/}
            </div>
        </>

    )
}


export function NavMenuItem({children, linkTo = "", disabled = false}) {
    const s = disabled ? "text-stone-600" : "hover:text-white hover:bg-[#000C78]"
    return (
        <Link href={linkTo}>
            <div className={"w-24 text-left pl-1 py-1 " + s}>
            {children}
            </div>
        </Link>
    )
}


export function NavMenu({children, name="", openName=""}) {
    const hiden = name == openName ? "" : "hidden"

    return (
        <>
            <div className={"absolute -left-2 mt-2 bg-stone-200 " + hiden}  >
                <WindowBorder>
                    <div className="">
                        {children}
                    </div>
                </WindowBorder>
            </div>


        </>
    )
}