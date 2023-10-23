import NavMenu from "../../components/NavMenu";
import { GoDeviceCamera, GoDeviceCameraVideo, GoBook } from "react-icons/go"
import YouTubePlayer from "react-player/youtube";


export default function () {
    return (
        <>
            <NavMenu />
            <h2 className="text-5xl text-center p-10">Sofia & Selena's Shenanigans</h2>
            <div className="relative flex flex-wrap justify-center p-20">

                {/* SOCIABLE SOFIA */}
                <div>
                    <div className="flex flex-wrap justify-center items-stretch">

                        <VideoTemplate
                            title="Episode 07 - Baking Sugar Cookies"
                            date="2022 April 20"
                            link="https://www.youtube.com/watch?v=nJ6do7saj-Q"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Episode 06 - Making Art Outside"
                            date="2022 March 26"
                            link="https://www.youtube.com/watch?v=Bs6DWnGOOh4"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Episode 05 - Playing with Ducky Bubbles"
                            date="2022 February 18"
                            link="https://www.youtube.com/watch?v=7hkCD1BhW3I"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Episode 04 - Making Jell-O"
                            date="2022 February 04"
                            link="https://www.youtube.com/watch?v=S7w3Sh-DgVM"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Episode 03 - Making Art"
                            date="2022 January 28"
                            link="https://www.youtube.com/watch?v=MHyCIikvJb8"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Episode 02 - Making Smoothie Boba"
                            date="2022 January 14"
                            link="https://www.youtube.com/watch?v=s8yGj_4gslQ"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Episode 01 - How to Groom a Unicorn"
                            date="2022 January 07"
                            link="https://www.youtube.com/watch?v=7ZdFM240cdQ"
                            description=""
                            color="gray" />
                    </div>
                </div>

            </div>
        </>
    )
}

{/* video template */ }
function VideoTemplate({
    title,
    date,
    link,
    description,
    color,
}: {
    title: string;
    date: string;
    link: string;
    description: string;
    color: string;
}) {
    return (
        <div className={`p-10 w-min bg-${color}-100 rounded-2xl border-2 border-gray-200 m-5`}>

            {/* title */}
            <a href={link} target="_blank" className={` text-xl text-${color}-900 flex items-center pb-10`}>
                <span className="pr-2"><GoDeviceCameraVideo /></span>
                {title}</a>

            {/* video player */}
            <div>
                <YouTubePlayer
                    url={link}
                    width={370}
                    height={220}
                    className="" />
            </div>

            {/* description */}
            <div className="pt-10">
                <p className={`text-${color}-900`}>{date}</p>
                <p className={`text-${color}-900 font-notosans`}>
                    {description}
                </p>
            </div>
        </div>
    )
}


