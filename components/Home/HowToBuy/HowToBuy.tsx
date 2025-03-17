import React from 'react'
import Image from "next/image";
import Link from 'next/link'


const HowToBuy = () => {
  return (
    <div className='bg-green-950 pt-40 flex flex-col items-center text-white gap-16 py-20' id='howtobuy'>
    <div className='flex flex-col items-center text-white gap-4'>
    <h1 className='font-semibold text-lime-300 text-2xl uppercase'>leap In</h1>
    <h1 className='font-[Freckle_Face] text-7xl uppercase'>How to Buy</h1>
    </div>

    <div>
        <div className='flex flex-col gap-16 w-[100%] mx-auto justify-center items-center'>

            <div className='border border-white/50 rounded-2xl px-10 py-20 flex flex-row items-center bg-linear-to-bl from-black/10 to-white/10 rotate-2 gap-4 w-[40%] mr-96'>
                <div>
                    <Image
                    aria-hidden
                    src="/KermFam 4.svg"
                    alt="KermFam 2"
                    width={200}
                    height={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[Freckle_Face] text-4xl text-lime-300 uppercase'>Step 1</h1>
                    <h1 className='font-[Freckle_Face] text-2xl uppercase'>Get a Crypto Wallet</h1>

                    <p className='text-xl'>First, you'll need a crypto wallet that supports decentralized exchanges (DEX). We recommend: <br /> ✅ MetaMask (Browser & Mobile) <br /> ✅ Trust Wallet (Mobile)</p>
                </div>
            </div>

            <div className='border border-white/50 rounded-2xl px-10 py-20 flex flex-row items-center bg-linear-to-bl from-black/10 to-white/10 -rotate-2 gap-4 w-[40%] ml-96'>
                <div>
                    <Image
                    aria-hidden
                    src="/KermFam 4.svg"
                    alt="KermFam 2"
                    width={200}
                    height={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[Freckle_Face] text-4xl text-lime-300 uppercase'>Step 2</h1>
                    <h1 className='font-[Freckle_Face] text-2xl uppercase'>Add Funds (BNB or ETH)</h1>

                    <p className='text-xl'>KERMFAM is available on [insert blockchain here], so make sure you have BNB (for Binance Smart Chain) or ETH (for Ethereum) in your wallet to swap for KERMFAM.
                    You can buy BNB/ETH on: <br /> 🔹 Binance <br /> 🔹 Coinbase <br /> 🔹 KuCoin <br /> Then transfer it to your wallet.</p>
                </div>
            </div>
            <div className='border border-white/50 rounded-2xl px-10 py-20 flex flex-row items-center bg-linear-to-bl from-black/10 to-white/10 rotate-2 gap-4 w-[40%] mr-96'>
                <div>
                    <Image
                    aria-hidden
                    src="/KermFam 4.svg"
                    alt="KermFam 2"
                    width={200}
                    height={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[Freckle_Face] text-4xl text-lime-300 uppercase'>Step 3</h1>
                    <h1 className='font-[Freckle_Face] text-2xl uppercase'>Get a Crypto Wallet</h1>

                    <p className='text-xl'>Go to PancakeSwap/Uniswap and connect your wallet.
                    On PancakeSwap (for BSC) or Uniswap (for ETH), search for KERMFAM by pasting the contract address: 📌 0x1234567890abcdef1234567890abcdef12345678 (Always double-check!)</p>
                </div>
            </div>

            <div className='border border-white/50 rounded-2xl px-10 py-20 flex flex-row items-center bg-linear-to-bl from-black/10 to-white/10 -rotate-2 gap-4 w-[40%] ml-96'>
                <div>
                    <Image
                    aria-hidden
                    src="/KermFam 4.svg"
                    alt="KermFam 2"
                    width={200}
                    height={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[Freckle_Face] text-4xl text-lime-300 uppercase'>Step 4</h1>
                    <h1 className='font-[Freckle_Face] text-2xl uppercase'>Swap for KERMFAM</h1>

                    <p className='text-xl'>Enter the amount of BNB/ETH you want to swap. Adjust slippage (recommended: 5-10%) if needed. Hit Swap, confirm the transaction in your wallet, and wait a few seconds for it to process.</p>
                </div>
            </div>
            <div className='border border-white/50 rounded-2xl px-10 py-20 flex flex-row items-center bg-linear-to-bl from-black/10 to-white/10 rotate-2 gap-4 w-[40%] mr-96'>
            <div>
                    <Image
                    aria-hidden
                    src="/KermFam 4.svg"
                    alt="KermFam 2"
                    width={200}
                    height={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[Freckle_Face] text-4xl text-lime-300 uppercase'>Step 5</h1>
                    <h1 className='font-[Freckle_Face] text-2xl uppercase'>Welcome to the KERMFAM!</h1>

                    <div>
                        <p className='text-xl'>You now own KERMFAM tokens! 🐸💚 Hold tight, spread the memes, and watch the family grow. <br /> 📢 Stay Connected:
                        </p>
                        <ul className='underline'>
                            <li>
                                <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank">Twitter</Link>
                            </li>
                            <li>
                                <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank">Instagram</Link>
                            </li>
                            <li>
                                <Link href="https://osoko-korede.vercel.app/" rel="noopener noreferrer" target="_blank">Whatsapp</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div>
    <button className='rounded-md bg-green-500 -rotate-6 hover:rotate-0 mt-20'>
            <span className='block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-lime-300 py-2 px-6 text-lg font-extrabold text-black  hover:-translate-y-2 
        active:translate-x-0 active:translate-y-0 transition-all cursor-pointer'>Join the movement!</span>
        </button>
    </div>

</div>
  )
}

export default HowToBuy