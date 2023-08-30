import BlogPost from "../../components/BlogPost"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="Welcome"
                title1="Christmas Family Picture"
                title2="Disneyland Hotel"
                title3="Merry-go-round"
                image1="blog/family_hmwcqu.jpg"
                image2="blog/disney-2_xmeu54.jpg"
                image3="blog/disney-1_ldxf1n.jpg" />

            {/* post */}
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 md:max-w-7xl">

                    {/* the buencaminos */}
                    <h3 className="text-3xl py-5">The Buencaminos</h3>

                    {/* content */}
                    <div className="space-y-3">
                        <p>Hello readers! We're the Buencamino family and we're so happy that you decided you wanted to follow along with us as we go through life.</p>
                        <p>Keeping up with life is super hard and documenting it is even harder. We have been the type to have tons of videos and photos in our phones of every single thing, but they never get to see the light of day. So we decided to change that and make this for ourselves and our families to come and take a peek of what we're up to. The intent of this site is to be personal and something for us to look back on years down the road. So please be kind.</p>
                        <p>We have our good days and bad days. We have days when we're super productive and days where we just sit around the house watching movies all day. But on on our productive days, we get some pretty good content to share with you all.</p>
                        <p>Again, we're glad you're here! Browse around, watch our videos, view our pictures, read our blogs, follow along, and have fun! </p>
                    </div>
                    {/* signature */}
                    <div className="py-10">
                        <p className="text-2xl">Love,</p>
                        <p className="font-parisienne text-4xl py-3">The Buencaminos</p>
                    </div>
                </div>


            </div>
        </>
    )
}