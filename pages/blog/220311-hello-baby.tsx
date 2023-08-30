import BlogPost from "../../components/BlogPost"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="Hello Baby!"
                title1="Baby Announcement"
                title2="Baby Announcement"
                title3="Baby Announcement"
                image1="blog/annoucement_tyewdp.jpg"
                image2="blog/announcement-2_vukgn4.jpg"
                image3="blog/announcement-3_dwuo4f.jpg" />

            {/* post */}
            <div className="flex flex-col justify-center items-center">
                <div className="p-5 md:max-w-7xl">
                    {/* new baby */}
                    <h3 className="text-3xl py-5">New Baby</h3>

                    {/* content */}
                    <div className="space-y-3">
                        <p>Sofia is expecting a sibling September 2022! We are very excited and nervous of how this new addition to our family will be. There's just so many emotions that we've been feeling since we had a rough time when Sofia was born.</p>
                        <p>For those who don't know, Sofia had colic as a baby. From the moment she was born, we were surviving on 1-2 hour naps at a time. She was extremely fussy and very hard to soothe. We're so thankful for our entire family for loving us so much that everyone was willing to take a shift for each of us to regain energy to do it all again the following day. </p>
                        <p>Sofia was the first grandchild on both sides of the family which meant this girl is SPOILED. We're very interested to find out how she'll do with a new baby in her home. She has been the only princess for almost 3 years now, so it will definitely be an adjustment for her.</p>
                    </div>

                    {/* 2nd time around */}
                    <h3 className="text-3xl pt-10 py-5">The 2nd Time Around</h3>

                    {/* content */}
                    <div className="space-y-3">
                        <p>For my second pregnancy, I have NOT been feeling that great. When Sofia was cooking up in my belly, I did not feel like I was pregnant at all. No symptoms--no nausea, no cravings, no adversions . . . nothing. The only thing that reminded me that I was pregnant was Mikki's constant reminder that I can't eat sushi or drink my green tea everyday and the belly that poked out. This time around, this baby does not like anything I do.</p>
                        <p>As I'm ending my first trimester, the last couple of days have been giving me hope that this is about to get better. The nausea has been annoying. It's just been creeping up in my throat, just teasing me. I've just been so afraid to eat knowing that it might not sit well and make me feel worse. I've been so tired and just want to sleep all day. Thank goodness for being able to work-from-home and sit on the couch in my pajamas with my laptop. And in case you've been wondering, the nausea and exhaustion explains the lack of Sofia's videos being posted. But I promise you that as these first-trimester symptomes let up, you'll be seeing more of Sofia!</p>
                    </div>

                    {/* telling the family */}
                    <h3 className="text-3xl pt-10 py-5">Telling the Family</h3>

                    {/* content */}
                    <div className="space-y-3">
                        <p>This baby was planned since we've been wanting Sofia to have a sibliing close in age to grow up with. Mikki and I have wonderful memories with our siblings and the amount of fun we had. So it was about time.</p>
                        <p>I probably found out I was pregnant the 2nd week of January. Our family was under the weather right when the new year started, which is very unusual for me becuae I rarely get sick (I think it's all that green tea I drink every day haha). Come to find out, my immune system was down because of all the hormonal changes happening! Just crazy how much the body changes in such a short amount of time.</p>
                        <p>So I told Mikki that same day. There was no epic announcement or anything like that. He basically asked me every day if I was pregnant yet. So it was just a "Well as a matter of fact, I am" type of deal.</p>
                        <p>As for our parents, we invited them for a Valentine's luncheon at our house and had them decorate mugs with Sofia and open their Valentine's day gifts which included our announcement picture and a new baby bottle with a pacifier tied to it. We knew that they would be happy for us, but it's always so nice to get their reactions of bringing another baby into this family.</p>
                    </div>

                    {/* fun things in September */}
                    <h3 className="text-3xl pt-10 py-5">Fun Things In September</h3>

                    {/* content */}
                    <div className="space-y-3">
                        <p>Baby's due date is September 20, 2022 and we couldn't be more thrilled! Baby will be born in the year of the Tiger and under the zodiac sign of a Virgo. Baby's birthstone will be a sapphire and will be born on the same day as George RR Martin! Fun stuff!</p>
                        <p>We can't wait to meet you and get to know your personality baby!</p>
                    </div>

                    {/* signature */}
                    <div className="py-10">
                        <p className="text-2xl">Love,</p>
                        <p className="font-parisienne text-4xl py-3">Lynne</p>
                    </div>
                </div>


            </div>
        </>
    )
}