import BlogPost from "../../components/BlogPost"

export default function Welcome() {
    return (
        <>
            {/* title and image */}
            <BlogPost
                title="Blog Title"
                title1=""
                title2=""
                title3=""
                image1="photos/charles-black-F7HGqkkMYAU-unsplash_kpoacr.jpg"
                image2="photos/charles-black-F7HGqkkMYAU-unsplash_kpoacr.jpg"
                image3="photos/charles-black-F7HGqkkMYAU-unsplash_kpoacr.jpg" />

            {/* post */}
            <div className="flex flex-col justify-center">
                <div className="p-5 md:max-w-7xl">
                    {/* heading */}
                    <h3 className="text-3xl py-5">Heading</h3>

                    {/* content */}
                    <p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lacus, ultrices sagittis vulputate a, interdum vel eros. Fusce venenatis massa eget justo hendrerit, non faucibus elit consequat. Nulla hendrerit cursus augue, tempus aliquam justo maximus faucibus. Vivamus iaculis efficitur massa, eu gravida augue laoreet eu. Nunc semper lobortis venenatis. Sed sed nulla sollicitudin, fermentum ipsum eget, pretium justo. Maecenas vel iaculis leo, quis pulvinar ex. Nunc ullamcorper ac nulla in pellentesque. Etiam finibus massa eu dolor dignissim vestibulum. Vivamus molestie ipsum at orci ornare, ac molestie tortor cursus. Maecenas aliquet semper odio quis iaculis. In dapibus, eros fringilla blandit vulputate, purus odio rutrum lorem, rutrum posuere justo leo et augue. In et arcu venenatis ipsum semper iaculis euismod eget turpis. Mauris eu metus id ante suscipit dictum in in mauris. Nam tempor viverra pellentesque. Donec et velit tempor, aliquam felis quis, tempus eros.</p>
                    <p>
                        Nam ullamcorper tempor dui, id pharetra lacus lacinia sed. Donec nunc velit, fermentum id efficitur a, cursus eu ligula. Mauris tempus dolor ac facilisis accumsan. Cras rhoncus quam sed sapien porta aliquam eget quis nunc. Curabitur non tortor velit. Fusce non iaculis dui. Nulla ut sagittis massa. Morbi consequat malesuada scelerisque. Aenean consectetur ullamcorper quam, ut efficitur massa vestibulum at. Nunc pretium massa ut porttitor bibendum. Aliquam ex quam, gravida eu cursus at, pulvinar ut nisi. Pellentesque id neque at nulla mollis molestie. Aliquam bibendum, eros eget maximus malesuada, eros metus ultricies nibh, eget molestie mauris neque at nisi. Integer nisl dui, commodo a faucibus ut, finibus id magna. Sed nec nibh quam.</p>

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