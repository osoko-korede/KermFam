import { navlinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";


const Nav = () => {
  return (
    <div className='flex w-[70%] bg-white/10 mx-auto backdrop-blur-md text-white px-10 py-6 justify-between mt-10 rounded-lg items-center fixed top-0 right-0 left-0 z-50 border border-white/10'>
        <div>
            <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank" className='flex flex-row items-center gap-4'>
                    <Image
                    aria-hidden
                    src="/KermFam Logo.svg"
                    alt="Youtube icon"
                    width={50}
                    height={50}
                />
                    <p className='font-[Freckle_Face] text-5xl'>KermFam</p>
            </Link>
        </div>
        <div className='flex justify-between w-6/12 mx-10'>
            {navlinks.map((link) => {
                return(
                    <Link href={link.url} key={link.id}>
                    <p>{link.label}</p>
                </Link>
                );
            })}
        </div>

        <div>
            <button className='rounded-md bg-green-500 -rotate-6 hover:rotate-0'>
                <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-lime-300 p-2 text-lg font-extrabold text-black  hover:-translate-y-2 
            active:translate-x-0 active:translate-y-0 transition-all cursor-pointer'>Join us! ✌🏽</span>
            </button>
        </div>
    </div>
  )
}

export default Nav