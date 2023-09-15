import NavMenu from "../components/NavMenu";
import Link from "next/link";
import { GoBook, GoDeviceCameraVideo } from "react-icons/go"
import Image from "next/image";


export default function Videos() {
    return (
        <>
            <NavMenu />
            <div className="flex justify-center items-center">
                <h2 className="text-5xl text-center p-10">Sneak Peak Into Our Lives</h2>
            </div>
            <div className="pb-20">
                {/* August Blog */}
                <BlogBlock
                    link="/videos/minute-moments"
                    image="photos/Video_-_Minute_Moments_yb1csh"
                    title="Minute Moments"
                    date=""
                    description="It's so wonderful that we live in an age where we can capture the beauty of our family and children creating memories together. This nostalgia is like snuggling in the cozy arms of the holiday season. But now we can relive the moments forever."
                />

                <BlogBlock
                    link="/videos/soserama"
                    image="photos/Video_-_Sofia_Selena_maxi7t"
                    title="Sofia & Selena's Shenanigans"
                    date=""
                    description="These videos are designed to seize the moments of Sofia & Selena's childhood and the fun they have together. It is made at their descretion and never intended to be 'work' or take away from their fun. As long as they enjoy putting these out for you, we'll continue to do so."
                />
            </div>
        </>
    )
}

export function BlogBlock({
    link,
    title,
    date,
    description,
    image }: {
        link: string;
        title: string;
        date: string;
        description: string;
        image: string;
    }
) {
    return (
        < div className="flex justify-center content-center p-5 text-gray-600" >
            <a href={link}>
                <div className="max-w-5xl bg-stone-200 rounded-xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg shadow-puple-100 duration-300">
                    <div className="flex md:max-w-xs max-h- md:max-h-auto">
                        <div className="rounded-t-xl md:rounded-t-none md:rounded-l-xl flex overflow-hidden justify-center content-center drop-shadow-xl shadow-stone-900">
                            <Image
                                src={`${image}`}
                                alt={title}
                                width="5900"
                                height="3500"
                            />
                        </div></div>
                    <div className="p-5">
                        <div className="flex justify-between align-center pb-5">
                            <h3 className="text-2xl flex">
                                <span className="pr-5 pt-1 flex justify-center"><GoDeviceCameraVideo /></span>
                                {title}</h3>
                            <p>{date}</p>
                        </div>
                        <p>{description}</p>
                        <p className="underline text-rose-900 pt-5">View Videos</p>
                    </div>
                </div>
            </a >
        </div >
    )
}

