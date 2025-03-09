import {BaseBar} from "@/components/base_bar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow_left from "@/components-assets/icons/arrow-left.svg"
import arrow_right from "@/components-assets/icons/arrow-right.svg"
import Image from "next/image";

export default function FullCarusel({imgs, open, setOpen, selImg}) {

    if (!open) return null;

    return (
        <div className="z-30 absolute w-screen h-screen max-h-screen bg-[#000C78]">
            <BaseBar title="Look at me" bg="light_blue" onClick={() => setOpen(false)}/>
            <div className="w-full h-full max-h-screen relative flex items-center z-10">
                <Carousel showStatus={false} showIndicators={false} autoPlay={false} selectedItem={selImg}
                          infiniteLoop={true}
                          renderArrowPrev={(onClickHandler, hasPrev, label) =>
                              (
                                  <button type="button" onClick={onClickHandler} title={label} className="absolute z-30 h-12 w-12 top-1/2 left-2">
                                      <Image src={arrow_left} alt="" />
                                  </button>)}
                          renderArrowNext={(onClickHandler, hasNext, label) =>
                              (
                                  <button type="button" onClick={onClickHandler} title={label} className="absolute z-30 h-12 w-12 top-1/2 right-2">
                                      <Image src={arrow_right} alt="" />
                                  </button>
                              )
                          }>

                    {imgs.map((p, index) =>
                        <div className="w-full h-dvh max-h-svh  pt-5 " key={index}>
                            <Image className="max-w-full max-h-full object-contain" alt="" src={p}/>
                        </div>
                    )}

                </Carousel>
            </div>
        </div>
    )
}