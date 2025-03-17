import React from 'react'
import Image from "next/image";
import { navlinks } from '@/constant/constant'
import Link from 'next/link';


const FooterComponent = () => {
  return (
    <div className='bg-green-950 pt-40 flex flex-col items-center text-white gap-16 py-20'>
        <div className='flex flex-col items-center text-white gap-4'>
            <h1 className='font-semibold text-lime-300 text-2xl uppercase'>Follow us</h1>
            <h1 className='font-[Freckle_Face] text-7xl uppercase'>Join Our Epic Community! 🌟</h1>
        </div>

        <div className='grid grid-cols-4 gap-8'>
            <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank" className='py-10 px-16 flex flex-col items-center border rounded-3xl gap-4 rotate-2 hover:-rotate-2 ease-in-out transition-all'>
                <Image
                aria-hidden
                src="/Facebook 1.svg"
                alt="facebook icon"
                width={80}
                height={80}
            />
                <p>Facebook</p>
            </Link>
            <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank" className='py-10 px-16 flex flex-col items-center border rounded-3xl gap-4 -rotate-2 hover:rotate-2 ease-in-out transition-all'>
                <Image
                aria-hidden
                src="/Twitter.svg"
                alt="Tiktok icon"
                width={80}
                height={80}
            />
                <p>TikTok</p>
            </Link>
            <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank" className='py-10 px-16 flex flex-col items-center border rounded-3xl gap-4 rotate-1 hover:-rotate-2 ease-in-out transition-all'>
                <Image
                aria-hidden
                src="/Whatsapp.svg"
                alt="Whatsapp icon"
                width={80}
                height={80}
            />
                <p>Whatsapp</p>
            </Link>
            <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank" className='py-10 px-16 flex flex-col items-center border rounded-3xl gap-4 rotate-1 hover:-rotate-2 ease-in-out transition-all'>
                <Image
                aria-hidden
                src="/Youtube.svg"
                alt="Youtube icon"
                width={80}
                height={80}
            />
                <p>Youtube</p>
            </Link>
        </div>

        <div className='flex justify-between gap-8'>
            {navlinks.map((link) => {
                return(
                    <Link href={link.url} key={link.id}>
                    <p>{link.label}</p>
                </Link>
                );
            })}
        </div>

        <p className='text-lime-300'>KermFam © 2025, All rights reserved.</p>


        <div>
        <Image
                aria-hidden
                src="/KermFam 3.svg"
                alt="facebook icon"
                width={300}
                height={80}
            />
        </div>

    </div>
  )
}

export default FooterComponent