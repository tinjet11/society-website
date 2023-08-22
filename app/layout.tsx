import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers';
import Titlebar from '@/components/navigation/title-bar';
import Bottombar from '@/components/navigation/bottom-bar';
import Explorer from '@/components/navigation/explorer';
import Tab from '@/components/navigation/tab';
import NavVertical from '@/components/navigation/NavVertical';
import Footer from '@/components/footer';
import ScrollTop from '@/components/scroll-top';


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
      <body className={inter.className} style={{ overflow: 'hidden' }}>
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

                <div className='my-8'>
                  <Footer />
                </div>
              </main>
            </div>
          </div>
          <Bottombar />


        </Providers>
      </body>
    </html>
  )
}
