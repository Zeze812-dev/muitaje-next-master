import {WindowBorder} from "./documents/window.jsx";
import {WinButton} from "./mini_btn.jsx";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


export const PopupToCart = ({setOpen}) => {
    const router = useRouter()

    return (
        <>
            <div onClick={() => (setOpen(false))} className="popup-bg absolute flex justify-center items-center w-screen h-screen top-0 left-0  z-20">
            </div>
            <div className="top-0 left-0 absolute w-screen h-screen flex  justify-center items-center">
                <div className=" w-screen mx-3 bg-stone-300 max-w-96 z-30">
                    <WindowBorder>
                        <div className="w-full h-full p-3 flex flex-col justify-center items-center gap-3 ">
                            <div className="text-4xl text-center text-black">Товар добвлен!</div>
                            {/*<button onClick={() => setOpen(false)} className="text-stone-500 text-2xl underline">ыаыаыа</button>*/}
                            <div className="flex flex-row justify-center items-center gap-3 ">
                                <WinButton onClick={() => setOpen(false)}>Назад</WinButton>
                                <WinButton onClick={() => router.push('/cart')}>В корзину!</WinButton>
                            </div>

                            {/*<WinButton onClick={() => console.log(1)}>OK</WinButton>*/}
                        </div>
                    </WindowBorder>

                </div>
            </div>


        </>
    )
}