import {BaseBar} from "@/components/base_bar";
import kabluk from "@/components-assets/icons/kabluk.svg"
import about from "@/assets/about.webp"
import Image from "next/image";


export default function AboutPage() {
    return (
        <>
            <title>About Muiraje</title>
            <div className="  relative bg-black text-white overflow-auto h-screen">
                <div className="relative h-full w-full">
                    <BaseBar title="About" bg="pink" logo={kabluk} linkTo="/catalog"/>
                    <div className="h-full w-full md:block xl:px-40 flex items-center pb-20">
                        <Image src={about} alt=""/>
                    </div>


                </div>
            </div>
        </>

    )
}