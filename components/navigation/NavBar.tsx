import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import UserButton from './UserButton'


const NavBar = () => {

    const session = false;

  return (
        <header className=' bg-secondary py-4 px-4 rounded-md my-4 mx-2 shadow-md'>
            <nav>
                <ul className='flex items-center justify-between m-auto'>
                    <li> 
                        <Link href="/" aria-label='logo'>
                        <p>Logo</p>
                        </Link>
                    </li>
                    <li>
                        <div className='flex items-center justify-between gap-5'>
                        {session && (
                            <Button>
                            Se connecter
                        </Button>
                        )}                        
                        <UserButton session={session}/>
                        </div>
                    </li>  

                </ul>
            </nav>
        </header>
  )
}

export default NavBar
