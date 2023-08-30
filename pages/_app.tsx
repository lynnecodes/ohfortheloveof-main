import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { GrInstagram, GrYoutube } from 'react-icons/gr';
import Script from 'next/script';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2ZZLCBBLYG`} />

      <Script strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2ZZLCBBLYG');`
        }
      </Script>

      <div className="relative font-rajdhani overflow-hidden text-gray-700 bg-slate-50">
        <Head>
          <title>Love Life</title>
          <link rel="icon" href="/favicon.ico" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Vidaloka&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
          </style>

        </Head>
        <div>
        </div>
        <Component {...pageProps} />
      </div>
      <footer className="bg-gray-100 p-10 m-0 font-rajdhani text-center text-gray-700 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-stretch">
          <div className='col-span-1 md:col-span-1'>
            The Buencamino Family <span className='hidden md:inline-flex ml-3'>|</span>
          </div>
          <div className='flex justify-center'>
            <div className='flex items-center'>
              <GrInstagram /><a href="https://www.instagram.com/ohfortheloveof.life/" className="px-3" target="_blank">Instagram</a> <span className='pr-3'>|</span>
            </div>
            <div className='flex items-center'>
              <GrYoutube /><a href="https://www.youtube.com/channel/UCFsbZvh73aqGAlC06lacf1w" className="pl-3" target=" _blank"> YouTube</a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}