import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const fonts = Nunito({
  subsets: ['latin']
})

export const metadata = {
  title: 'AirBnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
