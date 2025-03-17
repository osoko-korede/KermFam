"use client"; // Needed for Next.js App Router


import React from 'react'
import { motion } from "framer-motion";
import { itemVariants } from "../Utils/MotionVariant"; // Import item animation
import MotionWrapper from "../MotionWrapper/MotionWrapper"; // Import reusable wrapper
import Image from "next/image";


const About: React.FC = () =>{
  return (
    <MotionWrapper className='bg-green-950 pt-40 flex flex-col items-center text-white gap-16'>
        <div className='flex flex-col items-center text-white gap-4  py-20'  id='about'>
            <h1 className='font-semibold text-lime-300 text-2xl uppercase'>Our Story</h1>
            <h1 className='font-[Freckle_Face] text-7xl uppercase'>About KermFam</h1>
            <div className='flex flex-col gap-8 items-center'>

                <p className='w-[50%] text-center'>Once upon a time in the deepest, dankest corners of the internet, a family of frogs decided they were tired of watching other memecoins steal the spotlight. Inspired by the legend himself, KermFam was born—a place where frog lovers, degens, and memelords unite under one green banner.</p>

                <p className='w-[50%] text-center'>KermFam isn’t just a coin; it’s a movement. A tribute to the internet’s favorite frog and his ever-growing, chaotic family. We’re here to bring the fun, the community, and the gains (or at least some good ol’ frog vibes). Whether you’re sipping tea, embracing the chaos, or just here for the memes, KermFam welcomes you.</p>
                
                <p className='w-[50%] text-center'>Haters will say it’s a joke. Well… it kinda is. But we’re serious about making it the greatest frog-powered memecoin of all time.</p>

                <p className='w-[50%] text-center'>Join us, and let’s take KermFam to the lily pad and beyond! 🚀🌕</p>

            </div>

        </div>

        <motion.div
        className=""
        variants={itemVariants}
        >
            <Image
            aria-hidden
            src="/KermFam 2.svg"
            alt="facebook icon"
            width={250}
            height={250}
        />
        </motion.div>

        <div className='flex flex-col items-center pt-20'>
        <h1 className='font-[Freckle_Face] text-7xl uppercase'>Meet the Team</h1>
        <div className='flex flex-row w-screen py-20 px-40 gap-20'>
            <div className='flex flex-col gap-4 uppercase w-1/3'>
                <motion.div className='rounded-md bg-green-500 -rotate-3 hover:rotate-0' variants={itemVariants}>
                    <div
                    className="block -translate-x-3 -translate-y-3 rounded-md border-2 border-black bg-green-900 py-2 px-6 text-lg font-extrabold text-black">
                        <Image
                        aria-hidden
                        src="/KermFam 2.svg"
                        alt="facebook icon"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </motion.div>
                <h1 className='font-[Freckle_Face] text-5xl'>Kermtman</h1>
                <p>Project Leader</p>
            </div>
            <div className='flex flex-col gap-4 uppercase w-1/3'>
                <motion.div className='rounded-md bg-green-500 rotate-3 hover:rotate-0' variants={itemVariants}>
                    <div
                    className="block -translate-x-3 -translate-y-3 rounded-md border-2 border-black bg-green-900 py-2 px-6 text-lg font-extrabold text-black">
                        <Image
                        aria-hidden
                        src="/KermFam 2.svg"
                        alt="facebook icon"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </motion.div>
                <h1 className='font-[Freckle_Face] text-5xl'>Spider Kerm</h1>
                <p>Whale</p>
            </div>
            <div className='flex flex-col gap-4 uppercase w-1/3'>
                <motion.div className='rounded-md bg-green-500 -rotate-3 hover:rotate-0' variants={itemVariants}>
                    <div
                    className="block -translate-x-3 -translate-y-3 rounded-md border-2 border-black bg-green-900 py-2 px-6 text-lg font-extrabold text-black">
                        <Image
                        aria-hidden
                        src="/KermFam 2.svg"
                        alt="facebook icon"
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </motion.div>
                <h1 className='font-[Freckle_Face] text-5xl'>Rad Kerm</h1>
                <p>Designer</p>
            </div>
        </div>
        </div>


        <div>
        <motion.button className='rounded-md bg-green-500 -rotate-6 hover:rotate-0' variants={itemVariants}>
                <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-lime-300 py-2 px-6 text-lg font-extrabold text-black  hover:-translate-y-2 active:translate-x-0 active:translate-y-0 transition-all cursor-pointer'>Join the movement!</span>
            </motion.button>
        </div>

    </MotionWrapper>
  )
}

export default About