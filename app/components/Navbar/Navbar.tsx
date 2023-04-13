'use client';


import { Container, Logo, Search, UserMenu } from "../index"
import { SafeUser } from "@/app/types/index"

interface NavbarProps {
  currentUser?: SafeUser | null
}


const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div
        className='py-4 border-b-[1px]'
      >
        <Container>
          <div
           className='flex items-center justify-between gap-3 md:gap-0'
          >
            <Logo />
            <Search/>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar