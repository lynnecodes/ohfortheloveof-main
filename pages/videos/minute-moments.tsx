import NavMenu from "../../components/NavMenu";
import { GoDeviceCameraVideo } from "react-icons/go"
import YouTubePlayer from "react-player/youtube";


export default function () {
    return (
        <>
            <NavMenu />
            <h3 className="text-5xl flex justify-center items-center">Minute Moments</h3>
            <div className="relative flex flex-wrap justify-center pt-20">
                <div>
                    <div className="flex flex-wrap justify-center items-stretch">

                        {/* 2023 */}
                        <VideoTemplate
                            title="Haunted Harvest at Springs Preserve"
                            date="2023 October 21"
                            link="https://youtu.be/I3h77qT2hlA"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Summerlin Library's Fall Festival"
                            date="2023 October 7"
                            link="https://youtu.be/DDNvj-ccqMk"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Selena's First Birthday"
                            date="2023 September 9"
                            link="https://youtu.be/7EA8-Ml8TTY"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Selena's Baptism"
                            date="2023 September 9"
                            link="https://youtu.be/PpssxgrDdKg"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="California Adventure"
                            date="2023 September 7"
                            link="https://youtu.be/MC-kXW2cUtU"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Disneyland Parade"
                            date="2023 September 7"
                            link="https://youtu.be/6v74Dlj5FXo"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Selena's Birthday at Disneyland"
                            date="2023 September 7"
                            link="https://youtu.be/V2FuZnK4Rgw"
                            description=""
                            color="gray" />

                        {/* 2022 June */}
                        <VideoTemplate
                            title="Sofia's 3rd Birthday Party"
                            date="2022 June 25"
                            link="https://www.youtube.com/watch?v=QwIksoW0S2A"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Sofia's 3rd Birthday"
                            date="2022 June 24"
                            link="https://www.youtube.com/watch?v=lA501d_SGK4"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="La Jolla Cove"
                            date="2022 June 5"
                            link="https://www.youtube.com/watch?v=2jsPjFdtvww"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="San Diego Zoo"
                            date="2022 June 4"
                            link="https://www.youtube.com/watch?v=lyq0BmNn7sY"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Santa Monica"
                            date="2022 June 3"
                            link="https://www.youtube.com/watch?v=urQXiBTL-pQ"
                            description=""
                            color="gray" />

                        {/* 2022 May */}
                        <VideoTemplate
                            title="Baby #2 Gender Reveal"
                            date="2022 May 22"
                            link="https://www.youtube.com/watch?v=WXD_D5CSzr8"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="SD Friends"
                            date="2022 May 1"
                            link="https://www.youtube.com/watch?v=PIKL2SbbKuQ"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Springs Preserve"
                            date="2022 May 1"
                            link="https://www.youtube.com/watch?v=fZYSF2O4ySg"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Graduation Photoshoot"
                            date="2022 May 1"
                            link="https://www.youtube.com/watch?v=Pi-UNXcr35Q"
                            description=""
                            color="gray" />

                        {/* 2022 Aoril */}
                        <VideoTemplate
                            title="Easter (Part 2)"
                            date="2022 April 17"
                            link="https://www.youtube.com/watch?v=LhgnpctmavM"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Easter (Part 1)"
                            date="2022 April 16"
                            link="https://www.youtube.com/watch?v=kryagwXK_U0"
                            description=""
                            color="gray" />

                        {/* 2022 January */}
                        <VideoTemplate
                            title="New Years Eve"
                            date="2022 January 01"
                            link="https://www.youtube.com/watch?v=yBysi4S-H6U"
                            description=""
                            color="gray" />

                        {/* 2021 December */}
                        <VideoTemplate
                            title="New Years Eve"
                            date="2021 December 31"
                            link="https://www.youtube.com/watch?v=dYb-RStx0vA"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Christmas Day"
                            date="2021 December 25"
                            link="https://www.youtube.com/watch?v=y55kjABDI8g"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Christmas Eve"
                            date="2021 December 24"
                            link="https://www.youtube.com/watch?v=lkk-SVv9obU"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Enchant Las Vegas"
                            date="2021 December 20"
                            link="https://www.youtube.com/watch?v=gCuDYSiS6fk"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="5 Year Wedding Anniversary"
                            date="2021 December 16"
                            link="https://www.youtube.com/watch?v=JGHYXm938Nw"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Disneyland"
                            date="2021 December 15"
                            link="https://www.youtube.com/watch?v=SoekWEDZl3k"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Disney California Adventure"
                            date="2021 December 15"
                            link="https://www.youtube.com/watch?v=4OmVc-MwCA8"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Disneyland in the Rain"
                            date="2021 December 14"
                            link="https://www.youtube.com/watch?v=rlkSEClZI94"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="On the Way to Anaheim"
                            date="2021 December 13"
                            link="https://www.youtube.com/watch?v=cWXkokREaB0"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Balboa Park & Little Italy"
                            date="2021 December 12"
                            link="https://www.youtube.com/watch?v=T7g39uFPSzQ"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Spending Time with Friends"
                            date="2021 December 11"
                            link="https://www.youtube.com/watch?v=5ErysNLTMNU"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Liberty Station & Cutwater"
                            date="2021 December 10"
                            link="https://www.youtube.com/watch?v=IdmeteP-uCk"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="San Diego Roadtrip"
                            date="2021 December 09"
                            link="https://www.youtube.com/watch?v=Ep3AWGctCEk"
                            description=""
                            color="gray" />

                        <VideoTemplate
                            title="Buencamino Family Car "
                            date="2021 December 01"
                            link="https://www.youtube.com/watch?v=sobOJSiSpaw"
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


