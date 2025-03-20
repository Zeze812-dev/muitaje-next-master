import {BaseBar} from "../base_bar.jsx";
export function WindowBorder({children}) {
    return (
        <>
            <div className="w-full h-full border-stone-700 border-r-2 border-b-2 ">
                <div className="w-full h-full border-stone-200 border-l-2 border-t-2">
                    <div className="w-full h-full border-stone-500 border-r-2 border-b-2">
                        <div className="w-full h-full border-stone-100 border-l-2 border-t-2 px-[2px] overflow-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export function Window({children, title="", black=false, bg_bar="blue", logo}) {
    return (
        <>
            <div className={`h-screen overflow-auto bg-black ${black && "bg-stone-300"}`}>
                <div className="relative px-2 pt-6 md:px-10 text-white sm:flex  h-full justify-center items-center">

                    <div className="relative  h-3/4 bg-stone-200 text-black w-4/5">
                        <WindowBorder>
                            <BaseBar title={title} bg={bg_bar} linkTo={"/catalog"} logo={logo}/>
                            <main
                                className={`h-full py-8 flex items-center justify-center ${black && "bg-black text-white"}`}>
                                {children}
                            </main>
                        </WindowBorder>
                    </div>
                    <div className="h-16"/>
                </div>

            </div>

        </>

    )
}