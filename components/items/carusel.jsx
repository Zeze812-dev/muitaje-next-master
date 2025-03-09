
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import arrow_left from "@/components-assets/icons/arrow-left.svg"
import arrow_right from "@/components-assets/icons/arrow-right.svg"
import arrow_left_hover from "@/components-assets/icons/arrowhoverandclickleft.svg"
import arrow_left_active from "@/components-assets/icons/arrowhoverandclickleft.svg"
import arrow_right_hover from "@/components-assets/icons/arrowhoverandclickright.svg"
import arrow_right_active from "@/components-assets/icons/arrowhoverandclickright.svg"
import arrow_left_focus from "@/components-assets/icons/arrowleftfocus.svg"
import Image from "next/image";

export function MyCaruel({ children }) {
    const [prevArrowSrc, setPrevArrowSrc] = useState(arrow_left);
    const [nextArrowSrc, setNextArrowSrc] = useState(arrow_right);
return (
    <>
        <Carousel  showStatus={false} showIndicators={false} autoPlay={true}
            thumbWidth={100}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                (
                    <button type="button" onClick={onClickHandler} title={label} className="absolute z-10 h-10 w-9 bottom-2 left-1"
                            onMouseEnter={() => setPrevArrowSrc(arrow_left_hover)}
                            onMouseLeave={() => setPrevArrowSrc(arrow_left)}
                            onMouseDown={() => setPrevArrowSrc(arrow_left_active)}
                            onMouseUp={() => setPrevArrowSrc(arrow_left_hover)}
                    >
                        <Image src={prevArrowSrc} alt="" />
                    </button>)}
            renderArrowNext={(onClickHandler, hasNext, label) =>
                (
                    <button type="button" onClick={onClickHandler} title={label} className="absolute z-10 h-10 w-9 bottom-2 right-1"
                            onMouseEnter={() => setNextArrowSrc(arrow_right_hover)}
                            onMouseLeave={() => setNextArrowSrc(arrow_right)}
                            onMouseDown={() => setNextArrowSrc(arrow_right_active)}
                            onMouseUp={() => setNextArrowSrc(arrow_right_hover)}

                    >
                        <Image src={nextArrowSrc} alt="" />
                    </button>
            )
            }
            renderThumbs={(children) => {
                return children.map((item, index) => item.props.children)
            }}
        >
            {children}
                
        </Carousel>
    </>
    )
}