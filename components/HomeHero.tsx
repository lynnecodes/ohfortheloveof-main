import { CgMenuRound } from "react-icons/cg"
import HeroLines from "./HeroLines";
import Image from "next/image";

export default function () {
    return (
        <>
            {/* content */}
            < div className="mb-20 flex flex-col justify-center items-center flex-wrap" >
                {/* circles */}
                < div className="flex flex-wrap pb-10 justify-center" >
                    <div className="flex">
                        <div className="m-5 text-sm h-16 w-16 bg-stone-500 rounded-full flex justify-center items-center text-stone-200">
                            mikki
                        </div>
                        <div className="m-5 text-sm h-16 w-16 bg-yellow-800 rounded-full flex justify-center items-center text-yellow-100">
                            lynne
                        </div>
                        <div className="m-5 text-sm h-16 w-16 bg-stone-200 rounded-full flex justify-center items-center text-stone-900">
                            sofia
                        </div>
                    </div>
                    <div className="flex">
                        <div className="m-5 text-sm h-16 w-16 bg-rose-100 rounded-full flex justify-center items-center text-rose-900">
                            selena
                        </div>
                        <div className="m-5 text-sm h-16 w-16 bg-stone-700 rounded-full flex justify-center items-center text-stone-100">
                            embee <span className="pl-1 text-stone-400">✝︎</span>
                        </div>
                    </div>
                </div>

                {/* title */}
                < div className="relative" >
                    <h1 className="font-bungeehairline text-6xl text-center px-10">oh for the love of</h1>
                    <h2 className="font-vidaloka text-5xl uppercase py-10 text-center tracking-widest">life</h2>
                </div >

                <div className="max-w-md rounded-2xl flex overflow-hidden justify-center content-center drop-shadow-xl shadow-blue-900">
                    <Image
                        src="photos/Boho-PNG-Picture_oryznc.png"
                        alt="family picture"
                        width="3000"
                        height="2000"
                    />
                </div>

            </div >
        </>
    )
}