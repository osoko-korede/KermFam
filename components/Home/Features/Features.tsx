"use client"; // Needed for Next.js App Router


import React from 'react'
import { motion } from "framer-motion";
import { itemVariants } from "../Utils/MotionVariant"; // Import item animation
import Image from "next/image";



const Features = () => {
  return (
    <div className='bg-green-950 py-80 flex flex-col items-center text-white gap-16' id='tokenomics'>
        <div className='flex flex-col items-center text-white gap-4'>
            <h1 className='font-semibold text-lime-300 text-2xl uppercase'>Features</h1>
            <h1 className='font-[Freckle_Face] text-7xl uppercase'>Tokenomics & Tax Info!</h1>
            <p className='text-center'>Liquidity 69% • Marketing& Delopment 15% • Community 10%</p>
        </div>

        <div className='grid grid-cols-3 w-[70%] items-center'>
            <div className='flex flex-col gap-16 p-10 text-center'>
                    <div className='border border-white/50 rounded-2xl px-4 py-4 items-center flex flex-col bg-linear-to-bl from-black/10 to-white/10 rotate-3 gap-2'>
                        <p className='text-lg text-lime-500 uppercase font-semibold'>Transaction Tax</p>
                        <p className='text-xl'>1% of Total Supply</p>
                    </div>
                    <div className='border border-white/50 rounded-2xl px-4 py-4 items-center flex flex-col bg-linear-to-bl from-black/10 to-white/10 -rotate-3 gap-2'>
                        <p className='text-lg text-lime-500 uppercase font-semibold'>1% of Total Supply</p>
                        <p className='text-xl'>10% (for giveaways & engagement)</p>
                    </div>
            </div>

            <div className='flex flex-col gap-16 p-10'>
                <motion.div
                className=""
                variants={itemVariants}
                >
                    <Image
                    aria-hidden
                    src="/KermFam 6.svg"
                    alt="facebook icon"
                    width={300}
                    height={300}
                />
                </motion.div>
            </div>

            <div className='flex flex-col gap-16 p-10'>
                    <div className='border border-white/50 rounded-2xl px-4 py-4 items-center flex flex-col bg-linear-to-bl from-black/10 to-white/10 -rotate-3 gap-2'>
                        <p className='text-lg text-lime-500 uppercase font-semibold'>Total Supply</p>
                        <p className='text-xl'>420,690,000,000 KERM</p>
                    </div>
                    <div className='border border-white/50 rounded-2xl px-4 py-4 items-center flex flex-col bg-linear-to-bl from-black/10 to-white/10 rotate-3 gap-2'>
                        <p className='text-lg text-lime-500 uppercase font-semibold'>Liquidity 69% locked </p>
                        <p className='text-xl'>For 1 Year</p>
                    </div>
            </div>


        </div>


        <div>
        <button className='rounded-md bg-green-500 -rotate-6 hover:rotate-0'>
                <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-lime-300 py-2 px-6 text-lg font-extrabold text-black  hover:-translate-y-2 
            active:translate-x-0 active:translate-y-0 transition-all cursor-pointer'>View Contract</span>
            </button>
        </div>

    </div>
  )
}

export default Features