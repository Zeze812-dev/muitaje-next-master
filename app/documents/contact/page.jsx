import {BaseBar} from "@/components/base_bar.jsx";
import logo from "@/components-assets/cart/iconminicomp.webp"

export default function ContactPage() {
    return (
        <>
            <title>Muiraje Contact us</title>
            <div className="h-screen bg-black overflow-auto text-white">
                <BaseBar bg="blue" title="Contact us" logo={logo} linkTo="/catalog"/>
                <div className="flex flex-col justify-center items-center px-10 lg:px-40 xl:px-60">

                    <div className="relative flex flex-col text-center mb-20 mt-20 md:flex-row items-center justify-between w-full">
                        <h1 className="text-7xl ">Support</h1>
                        <a className="underline text-2xl leading-3 md:text-7xl"  href="https://t.me/care224radge">@care224radge</a>
                    </div>
                    <div className="flex flex-col text-center mb-20 md:flex-row items-center justify-between w-full">
                        <h1 className="text-7xl">Email</h1>
                        <a className="underline text-2xl leading-3 md:text-7xl" href="mailto:muiraje@muiraje.com">muiraje@muiraje.com</a>
                    </div>
                    <div className="flex flex-col text-center md:flex-row items-center justify-between w-full">
                        <h1 className="text-7xl">Telegram channel</h1>
                        <a className="underline text-2xl leading-3 md:text-7xl" href="https://t.me/mymiradge">@mymiradge</a>
                    </div>
                </div>

            </div>

        </>

    )
}