import React from 'react'
import Marquee from "react-fast-marquee";
import { marqueeitems } from '@/constant/constant'



const MarqueeComponent = () => {
  return (
    <div className=''>
    <Marquee speed={100} delay={0} className='bg-slate-950 py-6 -rotate-3'>
        {marqueeitems.map((item) => {
                return(
                    <p className='font-[Freckle_Face] text-7xl px-20 uppercase text-green-500'>{item.label}</p>
                );
            })}
    </Marquee>
    </div>
  )
}

export default MarqueeComponent