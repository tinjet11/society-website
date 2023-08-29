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
  src: '../public/fonts/Consola.ttf',
  display: 'swap'
})

export const proximanova = localFont({
  src: [
    {
      path: '../public/fonts/Proxima Nova Thin.otf',
      weight: '100'
    },
    {
      path: '../public/fonts/Proxima Nova Regular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/Proxima Nova Bold.otf',
      weight: '700'
    },
    {
      path: '../public/fonts/Proxima Nova Extrabold.otf',
      weight: '800'
    },
    {
      path: '../public/fonts/Proxima Nova Black.otf',
      weight: '900'
    }
  ],
  variable: '--font-proxima-nova'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <html lang="en" >
      <Suspense fallback={<Loading />}>
        <Head>
          <meta name="og:title" content="Computer Science Society" />
          <meta name="og:description" content="Under Student Association of University of Nottingham Malaysia" />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/doeirqkwt/image/upload/v1693272421/ws55bojchfzgngcfl69s.png"
          />
        </Head>
        <body className={`${proximanova.className} font-normal`} style={{ overflow: 'hidden' }}>
          <ScrollTop />
          <Providers>
            <Titlebar />

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
