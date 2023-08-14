import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers';
import Titlebar from '@/components/navigation/title-bar';
import Bottombar from '@/components/navigation/bottom-bar';
import Explorer from '@/components/navigation/explorer';
import Tab from '@/components/navigation/tab';
import NavVertical from '@/components/navigation/NavVertical';
import Footer from '@/components/footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Computer Science Society',
  description: 'University of Nottingham Malaysia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head>
      


      </Head>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col overflow-x-hidden h-screen">
        
            <div><Titlebar /></div>

    
            <div className="flex">
              <NavVertical />
              <Explorer />
              <div className="flex-1">
                <Tab />
                <main
                  className="overflow-x-hidden px-1 main"
                >
                  {children}

                  <div className='px-3 my-8'>
                <Footer />
            </div>
                </main>
              </div>
            </div>
            <Bottombar />

          </div>
        </Providers>
      </body>
    </html>
  )
}
