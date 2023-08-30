import Head from 'next/head'
import HomeHero from '../components/HomeHero'
import { GoDeviceCamera, GoDeviceCameraVideo, GoBook } from "react-icons/go"
import NavMenu from '../components/NavMenu'
import Image from 'next/image'
import LetterB from "../components/LetterB"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-gray-700">

      <Head>
        <title>Love Life</title>
        <link rel="icon" href="/favicson.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
        </style>
      </Head>

      <NavMenu />
      {/* hero section*/}
      <HomeHero />

      {/* about section */}
      <div className="bg-stone-200 w-full flex justify-center align-center py-10">
        <div className="bg-stone-200 max-w-7xl py-10 px-10 md:py-10 md:px-20 flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-center text-3xl font-purple-900 uppercase">The Buencamino Family</h3>

            <div className="p-10">
              <div className="max-w-md rounded-2xl flex overflow-hidden justify-center content-center drop-shadow-xl shadow-blue-900">
                <Image
                  src="blog/annoucement_tyewdp.jpg"
                  alt="family picture"
                  width="3000"
                  height="2000"
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center px-5'>
            <div className="text-center">
              <p>We're the Buencamino family and we're so happy that you decided you wanted to follow along with us as we navigate through life.
              </p>
            </div>
            <div className='flex justify-center pt-5 md:pt-10 transform scale-150'>
              <LetterB />
            </div>
          </div>
        </div>
      </div >

      {/* deatils section */}
      < div className="py-20 px-20 md:px-40" >
        <h3 className="text-3xl uppercase pb-5 text-center">A Minute of Your Time</h3>
        <p className="text-center px-20">"I wish there was a way to know you're in the good old days, before you've actually left the them."
        </p>
        <p className='text-center italic md:px-5'>- Andy Bernard, The Office</p>
        <div className="px-40 flex flex-col justify-center md:flex-row pt-10 space-x-0 space-y-10 md:space-x-10 md:space-y-0">

          {/* view 
          <a href="/photos"
            className="shadow-sm bg-green-50 hover:shadow-lg duration-500 p-5 rounded-md">
            <h4 className="text-green-900 flex items-center">
              <span className="pr-2"><GoDeviceCamera /></span>
              View</h4>
            <div className="flex items-center justify-center">
              <div className="w-40 h-40 bg-white mt-5">
                <div className="flex overflow-hidden justify-center content-center drop-shadow-xl shadow-blue-900">
                  <Image
                    src="photos/family_iq7nli.jpg"
                    alt="family picture"
                    width="3000"
                    height="3000"
                  />
                </div>
              </div>
            </div>
          </a>*/}

          {/* watch */}
          <a href="/videos"
            className="shadow-sm bg-slate-300 hover:shadow-lg duration-500 p-5 rounded-md">
            <h4 className="text-slate-800 flex items-center">
              <span className="pr-2"><GoDeviceCameraVideo /></span>
              Watch</h4>
            <div className="flex items-center justify-center">
              <div className="w-40 h-40 bg-white mt-5">
                <div className="flex overflow-hidden justify-center content-center drop-shadow-xl shadow-stone-900">
                  <Image
                    src="photos/videos_mqll0z.jpg"
                    alt="family picture"
                    width="3000"
                    height="3000"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* read */}
          <a href="/lifestyle"
            className="shadow-sm bg-slate-200 hover:shadow-lg duration-500 p-5 rounded-md">
            <h4 className="text-slate-900 flex items-center">
              <span className="pr-2"><GoBook /></span>
              Read</h4>
            <div className="flex items-center justify-center">
              <div className="w-40 h-40 bg-white mt-5">
                <div className="flex overflow-hidden justify-center content-center drop-shadow-xl shadow-slate-900">
                  <Image
                    src="photos/read_v45abg.jpg"
                    alt="family picture"
                    width="3000"
                    height="3000"
                  />
                </div>
              </div>
            </div>
          </a>

        </div >
      </div >
    </div >
  )
}
