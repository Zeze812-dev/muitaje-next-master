import Image from "next/image";


export function SmallBtn({ ico }) {
    return (
        <>
            <Image className=" border-r-2 m-0 w-10 h-full" src={ico} alt="" />
        </>
    )
}