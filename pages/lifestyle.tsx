import NavMenu from "../components/NavMenu";
import Link from "next/link";
import { GoBook } from "react-icons/go"
import Image from "next/image";


export default function Lifestyle() {
    return (
        <>
            <NavMenu />
            <div className="flex justify-center items-center">
                <h2 className="text-5xl text-center p-10">Read into Our Lives</h2>
            </div>
            <div className="pb-20">
                {/* November Blog */}
                <BlogBlock
                    link="/blog/231130-chill-november"
                    image="/blog/IMG_1958_rynsvd.heic"
                    title="Chill November"
                    date="November 30, 2023"
                    description="We had a very chill November. Our weekends were not as hectic as we thought it would be. It was lots of pizza and movie nights with the girls. Since the weather was getting nicer, we were able to take the girls to parks and stroll outdoors. "
                />

                {/* October Blog */}
                <BlogBlock
                    link="/blog/231031-less-than-spooky"
                    image="blog/IMG_0748_bazhar.jpg"
                    title="Not So Spooky Season"
                    date="October 31, 2023"
                    description="Fall is such a magical season! The cold air and plenty of fun festivities to enjoy, it’s really a fun season. Our calendars were packed with loads of things for the girls to enjoy."
                />

                {/* September Blog */}
                <BlogBlock
                    link="/blog/230930-september"
                    image="blog/disneyland_tmxbks"
                    title="September is for Selena"
                    date="September 30, 2023"
                    description="As September ends, we can officially say goodbye summer and hello fall!  Besides Selena‘s birthday, September has been pretty chill."
                />

                {/* August Blog */}
                <BlogBlock
                    link="/blog/230831-its-me-hi"
                    image="blog/5E70BCEA-C7FF-43AA-B441-8CEF74743972_1_102_o_lqqtqj.jpg"
                    title="It's Me, Hi."
                    date="August 31, 2023"
                    description="It is with great excitement that we announce our return! We are thrilled to be back and ready to share a little bit of us with you again."
                />

                <BlogBlock
                    link="/blog/220311-hello-baby"
                    image="blog/annoucement_tyewdp.jpg"
                    title="Hello Baby!"
                    date="March 11, 2022"
                    description="Sofia is expecting a sibling September 2022! We are very excited and nervous of how this new addition to our family will be."
                />

                <BlogBlock
                    link="/blog/220309-welcome"
                    image="blog/family_hmwcqu.jpg"
                    title="Welcome"
                    date="March 9, 2022"
                    description="Hello readers! We're the Buencamino family and we're so happy that you decided you wanted to follow along with us as we go through life."
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
                                width="5000"
                                height="3500"
                            />
                        </div></div>
                    <div className="p-5">
                        <div className="flex justify-between align-center pb-5">
                            <h3 className="text-2xl flex">
                                <span className="pr-5 pt-1 flex justify-center"><GoBook /></span>
                                {title}</h3>
                            <p>{date}</p>
                        </div>
                        <p>{description}</p>
                        <p className="underline text-rose-900 pt-5">Read More</p>
                    </div>
                </div>
            </a >
        </div >
    )
}

