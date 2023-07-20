import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers';
import { NavVertical } from '@/components';
import Footer from '@/components/Footer';
import Titlebar from '@/components/title-bar';
import Bottombar from '@/components/bottom-bar';
import Explorer from '@/components/explorer';
import Tab from '@/components/tab';

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
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col overflow-hidden h-screen">
        
            <div><Titlebar /></div>

    
            <div className="flex">
              <NavVertical />
              <Explorer />
              <div className="flex-1">
                <Tab />
                <main
                  className="overflow-y-auto px-8"
                  style={{ height: `calc(85vh - 30px)` }}
                >
                  {children}
                </main>
              </div>
            </div>
            <Bottombar />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
