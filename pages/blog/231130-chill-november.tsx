import BlogPost from "../../components/BlogPost"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="Chill November"
                title1=""
                title2=""
                title3=""
                image1="blog/FullSizeRender_2_cdbmzq.heic"
                image2="blog/3E3F368C-0274-4EBA-A438-7A93DF7768B1_prrysa.heic"
                image3="blog/FF19E37B-8645-48A0-818E-889131B425E8_wpjfml.jpg" />

            {/* post */}
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 md:max-w-7xl">
                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">What We Did</h3>

                    {/* content */}
                    <p className="pb-3">We had a very chill November. Our weekends were not as hectic as we thought it would be. It was lots of pizza and movie nights with the girls. Since the weather was getting nicer, we were able to take the girls to parks and stroll outdoors. </p>
                    <p className="pb-3">We did take a nice roadtrip down to San Diego for Miya Rei’s baptism. We’re so honored to be her Godparents and we look forward in being a part of her life as people her parents trust enough for their daughter to confide in. Miya and Selena are only 7 months apart and we’re so excited to watch our kids grow up together and become besprenns just like their parents. We can’t wait for them to get a little older so we can do more fun trips with them!</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">The Main Event</h3>

                    {/* content */}
                    <p className="pb-3">Thanksgiving is always going to be the star of November and we’re so grateful for our family and those who consider us family. We love each and every one of you and appreciate the love you give to our family. The Mendoza’s were out of town this Thanksgiving, so we had a small dinner on Thanksgiving Day. And another Thanksgiving dinner the day after at Mamala & Wowo’s home. We always look forward to that traditional carving of the turkey and prime rib and this year it did not disappoint. We’re so thankful they continue to invite us into their home to share a meal with the family during this time of year.</p>
                    <p className="pb-3">Thanksgiving is a special time of year when we gather with family and friends to give thanks for all the blessings in our lives. It's a time to reflect on all that we have and to appreciate the people who make our lives richer and more meaningful. While many people spend Thanksgiving with their families, it's also a great opportunity to spend time with close friends. Whether you gather for a traditional feast or simply enjoy each other's company, spending Thanksgiving with close friends can be a wonderful way to create memories that last a lifetime.  </p>


                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Sofia</h3>

                    {/* content */}
                    <p className="pb-3">Sofia is definitely growing into her own person and has taken over her own sense of style. We no longer have a say in what dress or bow she wants to wear for the day. She loves to dress up and “look beautiful”. We tell her that she’s beautiful all the time and that she doesn’t need makeup or high heels to prove it. We just hope that she’ll grow to be confident in her own skin and love herself for the way she is. She has this little way of posing for the camera or walking with purpose--it’s the cutest thing ever. </p>
                    <p className="pb-3">There are many times we think about where the time went and how grown up she’s becoming. She knows what she wants and we want her to stay decisive and direct in what makes her happy. We took a trip to Town Square after an Ikea visit. Sofia loves jumping and found a trampoline. It was intriguing to watch her as kids lined up to take a turn. Before I could tell her to let someone else on, she got off and went to wait patiently for her turn again. I couldn’t be more proud.</p>
                    <p className="pb-3">Sofia is learning to fix her mistakes and clean up after herself. We’re proud with any progress she makes to understand when she’s done something wrong and comes up with a solution on how to fix it. Her knowledge and curiosity is growing too. We’re trying our best to answer what we can and help her find the answers to her never-ending whys. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Selena</h3>

                    {/* content */}
                    <p className="pb-3">We took the girls to Container Park in Downtown for the first time. This was the first time we saw Selena really get out there, wander around on her own, and try to play with others. She really took it upon herself this time to climb and run after her sister. </p>
                    <p className="pb-3">Selena is starting to talk a lot--just like her Ate Sofia. She can babble on and on and really listens to what you have to say. She loves to read and likes bringing us books to read to her. Selena likes to say “Hi” and she can wave to you (if she’s up for it and in a good mood). She can also say dada, mama, papa, and baba to go down. Selena laughs a lot, which makes us happy. She’s just as goofy as her sister and we love the entertainment in the house. It’s loud, very loud--but fun. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Mr & Mrs </h3>

                    {/* content */}
                    <p className="pb-3">Our home has walls painted and countertops in! The carpet is supposed to be going in this week and even though we’re gutting it all once it’s done, we’re still excited to see it look more like a house. We’ve got designs and dreams of how we’d like the end product to look and we’re so excited to share it with you too when we start putting it all together!</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">What's Next</h3>

                    {/* content */}
                    <p className="pb-3">Oh man, Christmas! This is definitely our favorite time of the year. The lights, the smell, the cold air--the whole magic of Christmas. We’ve already got our first family event of December marked on our Calendars and we’re all very excited.  </p>
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