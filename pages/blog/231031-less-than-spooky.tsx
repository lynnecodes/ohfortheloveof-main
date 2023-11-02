import BlogPost from "../../components/BlogPost"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="Not So Spooky Season"
                title1=""
                title2=""
                title3=""
                image1="blog/IMG_0356_lnemjv.jpg"
                image2="blog/image_1_cfuwbu.png"
                image3="blog/IMG_0748_bazhar.jpg" />

            {/* post */}
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 md:max-w-7xl">
                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Fall Season
                    </h3>

                    {/* content */}
                    <p className="pb-3">Fall is such a magical season! The cold air and plenty of fun festivities to enjoy, it’s really a fun season. Our calendars were packed with loads of things for the girls to enjoy.</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Family Friendly Events</h3>

                    {/* content */}
                    <p className="pb-3">We love when the holiday season rolls around because of all the pop up activities that come to life during this time. I think we’re also getting the hang of finding family-friendly places around Vegas. If you don’t live here, there’s more to do than the casinos--you just have to find them. </p>
                    <p className="pb-3">We packed the each weekend with fun things for the girls and dressing up for the pumpkin patches, movie nights, trick-o-treating, and even just to go out to see what decorations places have out there was really fun. This year, Sofia chose to be Mal from Descendants. And since we dress up as a family, mommy was Maleficent, daddy was Hades, and Selena was Maleficent as a dragon. We also had got matching skeleton onesies! We definitely love to be “that family” that dresses up together. We even joked that we’ll still dress up even when they grow up and they’re out of the house.  </p>
                    <p className="pb-3">The only bummer this year is that mama’s neighborhood didn’t have much trick-o-treaters or homes that decorated for the holiday. But it’s okay because we were able to experience Treat Street at Downtown Summerlin. It was a good alternative. Instead of knocking on house doors, we went into stores and Sofia got some really good candy.  </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Sofia</h3>

                    {/* content */}
                    <p className="pb-3">Sofia did her first tournament this month! Well, actually it was by accident, but nevertheless, she participated and received two medals--one for nunchucks and one for board breaking. She was very nervous, but ended up doing really well. We are so proud of her and how far she’s going with her karate classes. She did mention she wants to start back at gymnastics. So we’ll look into that in the coming months. </p>
                    <p className="pb-3">SWe played our first board game with Sofia, Candyland. We noticed that she’s very competitive and being that she was the only little one for a while, she is not used to not getting her way. So we’re working on taking turns and how to deal with our feelings by losing and winning gracefully. She’s learning and doing very good. Just wait until she gets to Monopoly. haha. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Selena</h3>

                    {/* content */}
                    <p className="pb-3">If you don’t know already, Selena is glued to mommy’s hip. So this was an exciting month for her. She had playdates with friends and is slowly getting comfortable exploring on her own. Her personality really shows as an observer and cautious being. But once she gets used to her environment, she’s off to figuring things out by herself. She loves books and very smart. She’s figured out how to tell us she needs a diaper change, by bringing us her own diaper, especially right before bedtime along with a book to read. She tells us what time it is when she knows the change routine. </p>
                    <p className="pb-3">Selena’s was only 1 month old during her first Halloween, so she really got to experience what it’s all about this time around. She saw other kids dressed up, got to feel pumpkins, and watch some Halloween (family-friendly) classics like Nightmare Before Christmas and Hocus Pocus. We can only hope these kids love the holidays as much as we do.</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Mr & Mrs </h3>

                    {/* content */}
                    <p className="pb-3">As of October, our house has been drywalled and the exterior has been painted! It’s so cool to watch it coming all together. We did a site visit one day and walked in. It was so quiet! With the walls up we can really imagine sitting in our dining room and enjoying a movie from where the couch would be.!</p>
                    <p className="pb-3">Mikki celebrated his 34th birthday this year and we had a nice dinner at Steak by Gordon Ramsey. We have a slight obsession with cooking competitions and it all started with Mr. Ramsey himself. So we’re making our way through the culinary world, one Wellington at a time. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">What's Next</h3>

                    {/* content */}
                    <p className="pb-3">Thanksgiving is up next and there are so many things to be thankful for. So here’s to the month dedicated to many heartfelt thanks! </p>
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