import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <title>Muiraje 404</title>
            <div className=" text-xl p-6 leading-5 relative bg-[#0000B1] text-white overflow-auto h-screen  font-basis33">
                <div className="font-basis33 text-shadow">
                    A computer bug has been detected in the system. You have a few options to address the issue. Launch the IHATEMUIRAJE program to eliminate the bug. Power off your darn computer. <br/>
                    Muiraje is so 2007, nobody uses it anymore. LOL! :{">"} <br/>
                    Press any key to close the current program. <br/>
                    Perform a hard reset to reboot your computer. Please note that any unsaved work will be lost.
                </div>
                <div className=" flex uppercase justify-between my-8">
                    <div className="font-basis33 text-shadow">
                        404 Not Found <br/><br/>

                        About site <br/>
                        coded by vdick<br/>
                        designed by muiraje
                    </div>
                    <div className="font-basis33 text-center hidden sm:inline ">
                        404 Not Found <br/><br/>

                        About site <br/>
                        coded by vdick<br/>
                        designed by muiraje
                    </div>
                    <div className="font-basis33 text-right">
                        404 Not Found <br/><br/>

                        About site <br/>
                        coded by vdick<br/>
                        designed by muiraje
                    </div>
                </div>
                <div className="font-basis33">
                    An issue has been identified, and your computer system has been halted to prevent further damage.
                    MUIRAJE_asshole_FAILED is the error message you are encountering. If this is the first time you are
                    seeing this error screen, try restarting your computer. If the problem persists, follow these steps:<br/><br/>

                    <div className="ml-9 font-basis33">
                        Verify that any recent hardware or software installations are correctly set up. br
                        If this is a recent installation, reach out to the manufacturer for any necessary Windows
                        updates. <br/>
                        If issues persist, consider disabling or removing any new hardware or software components.
                        Additionally, disable BIOS memory options like caching or shadowing.<br/>
                        If you need to troubleshoot in Safe Mode, restart your computer, press F8 for Advanced Startup
                        Options, and choose Safe Mode. <br/><br/>
                    </div>

                    Technical Information: <br/>
                    * STOP: 0x00000024 (0xM2UI24JE, 0×00000224, 0x4JE8LOH8, 0x0000000) * <br/>
                    4FQ.sys - Address RADGE2024 base at 422M2224, Datestamp 2d4dd& <br/>
                    Initiating dump of physical memory <br/>
                    Physical memory dump completed <br/><br/>

                    For further assistance, please contact your system administrator or technical support. <br/><br/>

                    <Link className="hover:underline font-basis33" href={'/catalog'}>Okay, let me get out of here. <br/></Link>
                </div>
            </div>
        </>

    )
}