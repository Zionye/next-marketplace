"use client";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';

const Header = ({session}: {session: Session|null}) => {
  console.log('session: ', session);

  return (
    <header className='border-b p-4 flex items-center justify-between h-16'>
      <Link 
        className='text-blue-600 font-bold text-2xl' 
        href="/">
          Marketplace
      </Link>
      <nav className='flex gap-4 *:navbtn'>
        <Link 
          className='border border-blue-600 text-blue-600 inline-flex items-center gap-1 px-4 mr-4'
          href={"/new"}>
            <FontAwesomeIcon icon={faPlus} className='h-4' />
            Post a ad
        </Link>
        <span className='border-r'></span>
        {!session?.user && (
          <>
            <button className='border-0 text-gray-600'>Sign up</button>
            <button 
              className='bg-blue-600 text-white border-0 px-6 py-1'
              onClick={() => signIn("google")}>
                Login
            </button>
          </>
        )}
        {session?.user && (
          <Link href={"/account"}>
            <Image 
              src={session.user.image as string} alt={'avatar'} width={34} height={34}
              className='rounded-md'/>
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header