import React from 'react'

const Faq = () => {
  return (
    <div className='bg-green-950 pt-40 flex flex-col items-center text-white gap-16 py-20' id='faq'>

        <div className='flex flex-col items-center text-white gap-4'>
            <h1 className='font-semibold text-lime-300 text-2xl uppercase'>asked questions</h1>
            <h1 className='font-[Freckle_Face] text-7xl uppercase'>FAQ</h1>
        </div>

        <div className='flex flex-col gap-4'>
            <div className="collapse collapse-plus border bg-white border-black">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold bg-green-500 border-b-3 rounded-md border-black text-black uppercase" >What is KermFam?</div>
                <div className="collapse-content bg-white text-black"> <br /> KermFam is the ultimate Kermit-inspired memecoin, built for fun, memes, and community vibes.</div>
            </div>
            <div className="collapse collapse-plus border bg-white border-black">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold bg-green-500 border-b-3 rounded-md border-black text-black uppercase" >Is this coin safe?</div>
                <div className="collapse-content bg-white text-black"> <br /> As safe as a frog on a lily pad! No dev wallets, liquidity is locked, and we believe in full transparency.</div>
            </div>
            <div className="collapse collapse-plus border bg-white border-black">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold bg-green-500 border-b-3 rounded-md border-black text-black uppercase" >Wen moon?</div>
                <div className="collapse-content bg-white text-black"> <br /> We don’t predict the moon, but we sure as heck are aiming for the galactic swamp. 🚀</div>
            </div>
            <div className="collapse collapse-plus border bg-white border-black">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold bg-green-500 border-b-3 rounded-md border-black text-black uppercase" >How do I buy KERM?</div>
                <div className="collapse-content bg-white text-black"> <br /> 
                <ul className='list-decimal list-inside'>
                    <li>Get yourself some BNB (or ETH, depending on the chain).</li>
                    <li>Connect to a DEX (PancakeSwap or Uniswap).</li>
                    <li>Swap for $KERM.</li>
                    <li>HODL and enjoy the ride!</li>
                </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Faq