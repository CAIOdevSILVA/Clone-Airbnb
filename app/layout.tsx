import { Nunito } from "next/font/google"
import getCurrentUser from "./actions/getCurrentUser"

//Components
import { Navbar, ClientOnly, RegisterModal, LoginModal } from "./components"
import ToasterProvider from "./providers/ToasterProvider"

import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Clone Airbnb with Nextjs 13',
}

const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
