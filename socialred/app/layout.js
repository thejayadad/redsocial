import Navbar from '@/components/Navbar'
import './globals.css'
import Provider from '../SessionProvider'


export const metadata = {
  title: 'Donut Board',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <Navbar />
        {children}
        </Provider>
        </body>
    </html>
  )
}
