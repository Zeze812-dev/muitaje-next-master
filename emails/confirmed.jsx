import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
    Tailwind, Font,
} from "@react-email/components";
import * as React from "react";

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

export const ConfirmedEmail = ({loginCode}) => {
    return (
        <Tailwind>
        <Html>
            <Head>
                <Preview>TTTT</Preview>
                {/*<link href="https://myfonts.ru/myfonts?fonts=swiss-siena-rus-daymarius" rel="stylesheet"*/}
                {/*      type="text/css"/>*/}
                <Font fontFamily="Swiss Siena [RUS by Daymarius]" fallbackFontFamily="Arial" webFont={
                    {
                        url: "/static/swiss_siena_rus_by_daymarius.woff2",
                        format: 'woff2',
                    }
                } fontWeight={300} fontStyle="normal"/>
            </Head>
            <Body className="bg-[#0000B1]">
                <Container className="bg-white px-5 border-8 border-amber-700">
                    <div className="w-full h-full m-1 border-stone-700 border-r-2 border-b-2 ">
                        <Text className="text-xl">Привет, _Маша_!</Text>
                        <Img src="/static/mainpic.webp" className="w-full"/>
                        <Text className="text-xl">Твой заказ _24001_ успешно подтвержден и уже переходит на этап производства :)</Text>
                        <Text className="text-xl">Как только заказ будет отправлен (shipped), мы сообщим тебе по электронной почте и
                            напомним адрес, по которому можно будет забрать покупки!</Text>
                        <div className="bg-amber-400 border-t-8 border-b-amber-700">
                            <Text className="text-xl text-right">Forever yours,<br/>Muiraje</Text>
                        </div>

                    </div>
                </Container>
            </Body>
        </Html>
        </Tailwind>
)
}

ConfirmedEmail.PreviewProps = {
    loginCode: "sparo-ndigo-amurt-secan",
};

export default ConfirmedEmail;
