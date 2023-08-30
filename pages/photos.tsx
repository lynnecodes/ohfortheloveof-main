import NavMenu from "../components/NavMenu";
import Instagram from "instagram-web-api";
import InstaLayout from "../components/InstaLayout"
import InstagramFeed from "../components/InstaLayout";

export default function Photos({ instagramPosts }) {
    return (
        <>
            <NavMenu />
            <div className="flex justify-center items-center font-rajdhani">
                <h2 className="text-5xl text-center font-rajdhani p-10">Worth a Thousand Words</h2>
            </div>
        </>
    )
}
