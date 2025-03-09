import {BaseBar} from "@/components/base_bar";
import main_img from "@/components-assets/collection/about_main.png"
import main_rotate_img from "@/components-assets/collection/about_main_rotate.png"
import about2_img from "@/components-assets/collection/about2.png"
import about3_img from "@/components-assets/collection/about3.png"
import Image from "next/image";


export default function AboutCollectionPage() {
    return (
        <>
            <title>About Muiraje</title>
            <div className="  relative bg-[#1400FF] text-white overflow-auto h-screen">
                <div className=" ">
                    <BaseBar title="About 000 collection" bg="light_blue" linkTo="/catalog" fixed/>
                    <Image className="w-full sm:hidden" src={main_rotate_img} alt=""/>
                    <Image className="hidden sm:block" src={main_img} alt=""/>
                    <div className="px-4">
                        <Image className="" src={about2_img} alt=""/>
                        <p className="font-swiss_bt leading-5 px-5 my-10 text-sm">
                            The test collection 000 “Office sleepover/Cozy home” by the Muiraje, is a fusion of office
                            and home style, where each element can be easily mixed and matched with each other, as well
                            as paired with completely contrasting pieces. This collection is designed to emphasize the
                            importance of balance and tranquility, helping people feel comfortable in all circumstances.
                            These are pieces that easily transition from a professional environment to a cozy home
                            environment. With office sleepover/cozy home, people can confidently navigate through
                            various environments without compromising on comfort. Whether it{"'"}s a casual day out or a
                            formal event, the brand{"'"}s pieces are crafted to provide a sense of ease and relaxation,
                            allowing individuals to focus on their tasks without being hindered by their clothing. The
                            designs are executed with meticulous attention to detail, so that each piece complements the
                            other and at the same time stands out on its own. Combining elements of sophistication and
                            comfort, the Muiraje test collection serves as a reminder to embrace all aspects of
                            personality and lifestyle.
                            Whether dressing for a busy day at work or relaxing at home, these pieces are designed to
                            adapt easily to any situation, allowing people to go through their day with confidence and
                            ease. In a world where the blend of work and personal life has become the norm, the
                            collection represents a fresh fusion of harmony and self-expression. In essence, Muiraje{"'"}s
                            collection empowers individuals to embrace every moment with confidence and comfort, knowing
                            that they are dressed in clothing that supports them in every situation. It{"'"}s not just about
                            looking good; it{"'"}s about feeling good and being able to tackle whatever life throws your way
                            with ease and grace.
                        </p>
                        <p className="font-swiss_bt text-center leading-5 text-sm mb-10">
                            take a break. stay calm.<br/>
                            muiraje<br/>
                            2024
                        </p>
                    </div>

                    <Image className="sm:px-32 w-full mb-20" src={about3_img} alt=""/>

                    {/*<div className="h-full w-full md:block xl:px-40 flex items-center pb-20">*/}
                    {/*    <Image src={about} alt=""/>*/}
                    {/*</div>*/}


                </div>
            </div>
        </>

    )
}