import './globals.css'
import { Providers } from './providers';
import Titlebar from '@/components/navigation/title-bar';
import Bottombar from '@/components/navigation/bottom-bar';
import Explorer from '@/components/navigation/explorer';
import Tab from '@/components/navigation/tab';
import NavVertical from '@/components/navigation/NavVertical';
import Footer from '@/components/footer';
import ScrollTop from '@/components/scroll-top';
import { Suspense } from 'react';
import Loading from './loading';
import localFont from 'next/font/local';
import Head from 'next/head';

export const consolas = localFont({
  src: './Consolas.ttf',
  display: 'swap',
})

export const proximanova = localFont({
  src: './ProximaNova.otf',
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <html lang="en">
      <Suspense fallback={<Loading />}>
{/*         <head>
        <script src="https://tally.so/widgets/embed.js"></script>
        </head> */}
        <Head>
        <meta property="og:image" content="/public/opengraph-CSS_dark copy.png"></meta>
        </Head>
        <body className={proximanova.className} style={{ overflow: 'hidden' }}>
          <ScrollTop />
          <Providers>
                  <Titlebar  />

            <div className="flex">
              <NavVertical />
              <Explorer />
              <div style={{ width: '100%' }}  >
                <Tab />
                <main
                  className="overflow-x-hidden main flex-1"
                >
                  {children}

                  <div className='my-1'>
                    <Footer />
                  </div>
                </main>
              </div>
            </div>
            <Bottombar />


          </Providers>
        </body>
      </Suspense>
    </html>
  )
}
