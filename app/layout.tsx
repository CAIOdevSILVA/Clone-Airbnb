import { Nunito } from "next/font/google"

//Components
import { Navbar } from "./api/components"

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Clone Airbnb with Nextjs 13',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
