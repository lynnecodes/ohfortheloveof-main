import HeroLines from "./HeroLines";

export default function () {
    return (
        <div className="mt-0 ">
            <div className="w-full flex justify-center py-10 pb-20 ">
                <ul className="flex md:space-x-0 text-lg md:text-2xl ">
                    <li>
                        <a href="/"
                            className="py-2 px-4 border-b-2 border-slate-300 hover:border-b-2 hover:border-slate-800 duration-300">
                            Home
                        </a>
                    </li>
                    {/*
                    <li>
                        <a href="/photos "
                            className="py-2 px-4 hover:border-b-2 border-blue-200 duration-300">
                            Photos
                        </a>
                    </li> */}
                    <li>
                        <a href="/videos"
                            className="py-2 px-4 border-b-2 border-slate-300 hover:border-b-2 hover:border-slate-800 duration-300">
                            Videos
                        </a>
                    </li>
                    <li>
                        <a href="/lifestyle"
                            className="py-2 px-4 border-b-2 border-slate-300 hover:border-b-2 hover:border-slate-800 duration-300">
                            Lifestyle
                        </a>
                    </li>
                </ul >
            </div >
        </div>
    )
}