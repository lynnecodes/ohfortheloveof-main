import BlogPost from "../../components/BlogPost"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="September is for Selena"
                title1=""
                title2=""
                title3=""
                image1="blog/disneyland_tmxbks"
                image2="blog/baptism_nq9i5b"
                image3="blog/home_iu2wxs" />

            {/* post */}
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 md:max-w-7xl">
                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Goodbye Summer</h3>
                    {/* content */}
                    <p className="pb-3">As September ends, we can officially say goodbye summer and hello fall!  Besides Selena‘s birthday, September has been pretty chill. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Hard Work Pays Off
                    </h3>

                    {/* content */}
                    <p className="pb-3">We started the month with an award for my amazing parents. They have been a part of the Ilocano-American Association for years and during their annual gala, they received an award for their contribution and dedication. It's always great to see my parents recognized for their achievement and I'm sure they felt very appreciated. We’ve seen first hand the amount of work they put into this organization—volunteering most of their free time and labored efforts. We are so proud!</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Sofia</h3>

                    {/* content */}
                    <p className="pb-3">Sofia had something to brag about this month too! She earned her tiger belt in karate! She was thrilled to be picked to demonstrate her skills in front of class because of how well she was following along. The progress she’s making still amazes us. How’d we get so lucky with such a great kid? She never stops surprising us.  She’s always been so shy and nervous in class, so this was a major step forward! </p>
                    <p className="pb-3">We also started taking a couple hours each weekday to do “homework”. Sofia loves learning so we decided to do a little homeschooling since we opted out of sending her to preschool. She already knows the basics. She can write and recognize letters, numbers, shapes, and colors. So we’re reviewing the alphabet to improve penmanship and working on sounds to start reading. We’re also engaging her in critical thinking and emotions. She’s already great at making friends, so we have no doubt that when she starts school next year, she’ll be more than ready. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Mr & Mrs</h3>

                    {/* content */}
                    <p className="pb-3">Our new home is coming along nicely. Framing is nearing completion and we’re looking at drywall in the coming weeks! It's super exciting to see our home starting to take shape. It so much fun walking the house while it’s in different stages. We can’t wait to see it all done! </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Selena</h3>

                    {/* content */}
                    <p className="pb-3">Although we had a lot of fun stuff going on, the biggest day of September had to be Selena’s first birthday, baptism, and first trip to Disneyland! Such a beautiful milestone. Selena experienced so many firsts and developed into a fun-loving character. We’ve noticed that she’s very independent and very observant. She can’t wait to say words and she’s very quick to copy whatever her sister does. We predict that she’s going to be very laid back and calm. But only time will tell!</p>
                    <p className="pb-3">We had a big first birthday for Selena. We first took our family to Disneyland where Selena was able to experience the joy of being immersed in Disney for the first time. We don't think she really understood what was happening around her, but nevertheless she had a look of amazement with everything around her. Once we came back, we held a big celebration for her and we’re so grateful for everyone who came and enjoyed themselves. The party wasn’t just for her but for everyone who loves her. We appreciate all the blessings, company, and friendships. We want Selena to know that she’s surrounded by so much love. We hope that (even if she won’t remember) it’ll emotionally imprint the importance of community and know the impact she can make by just being in this world. </p>
                    <p className="pb-3">And let’s not forget that Selena’s baptism! Faith is a crucial part of our lives. We’re blessed and thankful to God for many things in our lives. Having our girls part of a faith that fosters trust and compassion is important to our family. Choosing of Godparents was not taken lightly. Godparents are for life. We did not pick based on who’s “closest” to us. But rather we chose Godparents that will guide our girls onto the right path. They love them and has the ability to show them what it means to be a noble person because a Godparent is someone who encourages the good in a person. No matter what happens in life, they’ll be there for the girls because they made this commitment to be someone she can rely on. That’s all that matters. We love each of you for individual reasons and what you can teach Selena and Sofia about life and what it means to live. </p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">What's Next</h3>

                    {/* content */}
                    <p className="pb-3">Well the holidays! That’s what’s next! We’re way too excited for the -ber months and the upcoming cold season. Especially since the girls are getting older. It’s fun planning all the upcoming family outings and get-togethers for the season. The calendar is already filling up!</p>
                    <p className="pb-3">October is definitely filled with fun Halloween things. So better believe we’ll be out trying to make the most of our weekends! If we run into you around town at any of the family fall festivals, events, or pumpkin patches, say hi!  </p>
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