import React from 'react'
import Marquee from "react-fast-marquee";
import { marqueeitems } from '@/constant/constant'



const MarqueeComponentTwo = () => {
  return (
    <div className='bg-green-950'>
    <Marquee speed={100} delay={0} className='bg-lime-300 py-6 rotate-3'>
        {marqueeitems.map((item) => {
                return(
                    <p key={item.id} className='font-[Freckle_Face] text-7xl px-20 uppercase text-slate-950'>{item.label}</p>
                );
            })}
    </Marquee>
    </div>
  )
}

export default MarqueeComponentTwo