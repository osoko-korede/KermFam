import React from 'react'

const Roadmap = () => {
  return (
    <div className='text-white bg-green-950 items-center flex flex-col gap-4 py-40' id='roadmap'>

        <h1 className='font-semibold text-lime-300 text-2xl uppercase'>Stroy Timeline</h1>
        <h1 className='font-[Freckle_Face] text-7xl uppercase'>Roadmap</h1>
        
        <div className=" w-[60%] mx-auto  space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent pt-40">

    {/* <!-- Item #1 --> */}
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-slate-300 group-[.is-active]:bg-lime-300 text-slate-500 group-[.is-active]:text-emerald-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="rotate-3 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-linear-to-bl from-black/10 to-white/10 p-16 rounded-2xl border border-slate-200/50 shadow">
            <div className="flex flex-col justify-between space-y-2 mb-1">
            <h1 className="font-[Freckle_Face] text-3xl text-lime-300">Phase 1</h1>
                <div className="font-bold text-xl">Tadpole Stage</div>
            </div>
            <ul className="list-inside list-disc">
                <li>Website & Whitepaper Launch</li>
                <li>Smart Contract Deployment</li>
                <li>Community Building (Twitter, Telegram, Discord)</li>
                <li>Initial Marketing Blitz</li>
            </ul>
        </div>
    </div>
    {/* <!-- Item #2 --> */}
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-slate-300 group-[.is-active]:bg-lime-300 text-slate-500 group-[.is-active]:text-emerald-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="-rotate-3 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-linear-to-bl from-black/10 to-white/10 p-16 rounded-2xl border border-slate-200/50 shadow">
            <div className="flex flex-col justify-between space-y-2 mb-1">
            <h1 className="font-[Freckle_Face] text-3xl text-lime-300">Phase 2</h1>
                <div className="font-bold text-xl">Froglet Stage</div>
            </div>
            <ul className="list-inside list-disc">
                <li>CEX Listings (Get KERM on major exchanges!)</li>
                <li>Meme Competitions & Giveaways</li>
                <li>KermFam NFT Collection Launch</li>
                <li>First Charity Donation to Save the Frogs</li>
            </ul>
        </div>
    </div>
    
   
    
    {/* <!-- Item #3 --> */}
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
            </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="rotate-3 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-linear-to-bl from-black/10 to-white/10 p-16 rounded-2xl border border-slate-200/50 shadow">
            <div className="flex flex-col justify-between space-y-2 mb-1">
            <h1 className="font-[Freckle_Face] text-3xl text-lime-300">Phase 3</h1>
                <div className="font-bold text-xl">Launch & Community Building</div>
            </div>
            <ul className="list-inside list-disc">
                <li>Major Partnerships & Influencer Collabs</li>
                <li>KermSwap (Our own decentralized exchange)</li>
                <li>KermVerse (Metaverse integration—Frog avatars, anyone?)</li>
                <li>Expansion Beyond Memecoins (Who said frogs can’t build real utility?)</li>
            </ul>
        </div>
    </div>
    

</div>
    </div>
  )
}

export default Roadmap