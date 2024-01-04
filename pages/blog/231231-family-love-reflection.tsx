import BlogPost from "../../components/BlogPost"
import Image from "next/image"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="Family, Love, & Reflection"
                title1=""
                title2=""
                title3=""
                image1="blog/IMG_2363_ethcfj.jpg"
                image2="blog/231225-Christmas_Card_01_spvu6k.png"
                image3="blog/Screen_Shot_2024-01-04_at_11.42.29_AM_scmupx.png" />

            {/* post */}
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 md:max-w-7xl">
                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Magic in the Air</h3>

                    {/* content */}
                    <p className="pb-3">The month of December has always been a heart-warming time for us because it’s the month of family, love, and reflection.</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Family Traditions</h3>

                    {/* content */}
                    <p className="pb-3">Oh how much we love our family! Our little family, our extended family, and our friends that have become part of our family. We just love to be surrounded by people who love us unconditionally.</p>
                    <p className="pb-3">Mikki used to tell me about Christmases with his family in the Philippines. The Santa visits and performances  his brothers and cousins put on for presents . . . It was a tradition Mikki’s mom wanted to continue for her grandchildren and we’re grateful to be a part of that and keep the Christmas magic alive for the girls.</p>
                    <p className="pb-3">As for the Mendoza's, everyone knows my mom’s love language--it’s cooking with such love that once it hits your mouth, it immediately warms your heart. It's the early mornings, the smell that fills the kitchen, family in every corner of the house. That’s Christmas to me. I had the opportunity to learn my kitchen skills from my mom, who learned from her dad and now Sofia is starting to learn from the best mama chef out there. Sofia is a great helper and said that one day she wants to be a doctor chef.</p>
                    <p className="pb-3">If you can’t tell, we love our parents and being around them. We have so much fun with them and love the love the give. Each year we take a family trip to Enchant to see the lights and take in the Christmas air. Selena has become such a great walker, that she definitely enjoyed running around with her sister this time around. Memories like these are just so fun to make and are so precious to us because we can’t rewind time.</p>


                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Sofia</h3>

                    {/* content */}
                    <p className="pb-3">Sofia wrote her first letter to Santa this year. If you ask her, she’ll say she “ordered” a big unicorn, a Cocomelon grocery set, an ice cream play-doh, and a train set for Selena. She even made sure to make a video recording just in case the letter doesn’t make it to him and told me to text it to him. I’m telling you, that girl is getting smarter every day. How her mind works is beyond me.</p>
                    <p className="pb-3">Speaking of the wonders of the mind, Sofia explained to me that she no longer wanted to continue Karate because she wasn’t enjoying it and it wasn’t for her. The deal was that she stick through it until the end of the term, then she can decide if she wants to still do it or try something else. She stuck through it and still decided that it wasn’t for her and that she wants to try something else. Nevertheless, we’re proud of her and how much she’s learned and the progress she’s made throughout the year. Her instructors were very supportive and patient with her and with that, we’re eternally grateful.</p>


                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Selena</h3>

                    {/* content */}
                    <p className="pb-3">We started taking the girls to parks to play and release their energy. They just have so much of it! Selena is starting to love to run and jump (without her feet leaving the floor, so they're more like squats) and she’s babbling so much. We were joking around wondering how is that all our kids want to keep on moving. All three of them! Embee, Sofia, and now Selena.</p>
                    <p className="pb-3">We love it all though. Selena is such a goofball. She’s shy, but loves to run up to people and run away when they say hi to her. She’s sweet and oftentimes will be the one comforting Sofia when she’s down or hurt. Selena absolutely hates things in her hair. So if you’re wondering why her hair is always in her eyes, that’s because she pulls out anything we put on her head. She likes it thaat way, so it is what it is.</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Mr & Mrs </h3>

                    {/* content */}
                    <p className="pb-3">This month we celebrated 7 years of marriage. What better way to spend our lucky seven in no other than Las Vegas. So we spent two nights on the Las Vegas Strip playing tourist and exploring our city. Let me tell you . . . while having two little ones at home, all you want to do is sleep when you see an empty bed.</p>
                    <p className="pb-3">Walking through each hotel in Las Vegas with a coffee in hand during the day and being in bed by 9 really hit us that we’re not in our twenties anymore. It just reminds us of how far our lives have come, where we started, where we’re at, and where we’re going. It made us think of our tiny family and how we--no matter how tired we are--would not have it any other way.</p>
                    <p className="pb-3">We always have a wonderful time going on dates and enjoying each others’ company. This works for us. It is how we take care of each other and ourselves. Sometimes life becomes routine and we don’t get a chance to breathe when it gets rough. This gives us time to reflect on life and really talk about how we’re doing. Part of the reason we fell in love was because we can let go of all judgements and trust each other to talk through life with love.</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">Embee</h3>


                    {/* content */}
                    <p className="pb-3">Although we had a wonderful month filled with excitement, family, celebrations, and gatherings; this month’s recap comes a little late due to our tremendous loss that lead the New Year.</p>
                    <p className="pb-3">It pains me to put into words how our baby boy is no longer warming my side or following my girls around. How he’s not in his bed and his bowls are empty. How eleven years slipped by so quickly and how sudden everything happened. Embee is loved and missed so much.</p>
                    <p className="pb-3">Embee was not feeling well after Christmas and was sent home with meds and food from the vet the day after his birthday on the 27th. Our vet was confident in his recovery because of his upbeat demeanor and showing good signs of recovery. Whether it was a rash or a dog bite, Embee has always been strong and was really good at hiding his pain. There’s no way we would have known that he was way worse then we suspected. We imagine he just put on a happy face so he can come home.</p>
                    <p className="pb-3">Getting him to eat throughout the weekend was hard, but ate a bit of his food Sunday. We thought he’s doing great! Getting his appetite back. He probably just didn’t want us to worry and have a good New Years Eve. When we woke the next morning our poor boy was hyperventilating and we took him the only pet hospital that was open in the valley. We were able to spend time with him after the first revival of CPR. He looked happy to see us. We gave him love and kisses and assurance everything is okay. We wanted to stay and be there for him. But we told ourselves Embee always pulls through. He’ll be okay. The doctor said he’ll have to stay for a couple days to stabilize him. That boy waited until we left. I want to believe he did that for us so we won’t have to see him go. He was such a good boy up until the end. Our hearts are broken.</p>

                    {/* heading */}
                    <h3 className="text-3xl py-5 font-bold">What's Next</h3>

                    {/* content */}
                    <p className="pb-3">The start of the year is going to be rough with a part of our family in doggy heaven, but it's easier knowing that we had only good memories with him alongside with everyone who loved Embee just as much.  </p>
                    <p className="pb-3">To get our spirits up, we do have things to look forward to in 2024. Our house will be completed soon, we have travel plans ready, and lots of gatherings in the works to fill our new home with love, laughter, and memories.</p>
                    <p className="pb-3">We’ll see you in 2024!</p>
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