import NavMenu from "./NavMenu"
import Image from "next/image";

export default function BlogPost({
    title,
    title1,
    title2,
    title3,
    image1,
    image2,
    image3,
}: {
    title: string;
    title1: string;
    title2: string;
    title3: string;
    image1: string;
    image2: string;
    image3: string;
}) {
    return (
        <>
            <NavMenu />

            {/* title */}
            <div className="flex justify-center items-center">
                <h2 className="text-5xl text-center">{title}</h2>
            </div>

            {/* images */}
            <div className="flex justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 max-w-7xl py-5 lg:p-10">
                    <div className="p-5">
                        <div className="rounded-2xl flex overflow-hidden justify-center content-center drop-shadow-xl shadow-blue-900">
                            <Image
                                src={`${image1}`}
                                alt={title1}
                                width="5000"
                                height="3500"
                            /></div>

                    </div>
                    <div className="flex justify-center p-5 object-center">
                        <div className="rounded-2xl flex overflow-hidden justify-center content-center drop-shadow-xl shadow-blue-900">                        <Image
                            src={`${image2}`}
                            alt={title2}
                            width="5000"
                            height="3500"
                        /></div>

                    </div>
                    <div className="flex justify-center p-5 object-center">
                        <div className="rounded-2xl flex overflow-hidden justify-center content-center drop-shadow-xl shadow-blue-900">                        <Image
                            src={`${image3}`}
                            alt={title3}
                            width="5000"
                            height="3500"
                        /></div>
                    </div>
                </div>
            </div>

        </>
    )
}
