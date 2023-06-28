import Header from '@/components/Header'
import './globals.css'
import { Odibee_Sans } from 'next/font/google'

const Odibee = Odibee_Sans({weight:["400"],subsets:["latin"]}) 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Odibee.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
