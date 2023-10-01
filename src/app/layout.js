import TopHeader from '@/components/TopHeader/TopHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import Topbar from '@/components/Topbar/Topbar'
import Footer from '@/components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Rental | Home',
  description: 'Created by car rental service,  take your dream ride and car service ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
