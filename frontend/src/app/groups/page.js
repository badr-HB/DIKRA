"use client"
import Aside from "@/component/sidebar.js"
import Image from "next/image"
import Buttons from "@/component/buttons.js"
import { Overview, Videos, Members } from "@/component/groups_info.js"
import { useState } from "react"

export default function HOME() {
    const [display, setfunction] = useState('overview')

    const handleclick = (e) => {
        if (e === 1) {
            setfunction('overview')
        }
        else if (e === 2) {
            setfunction('videos')
        }
        else if (e === 3) {
            setfunction('members')
        }
    }

    return (
        <div className="w-full h-screen flex-1 flex bg-(--bg-main) pb-10">
            <Aside />
            <div className="w-full h-full pr-6 pl-7 sm:px-6 ">
                <div className="w-full py-10 h-auto relative">
                    <div className="w-full h-130 lg:h-90 relative pb-5 lg:pb-0">
                        <Image src={"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop"} fill alt="background photo" className="object-cover aspect-auto rounded-3xl" />
                        <div className="absolute w-full bottom-0">
                            <div className="w-full h-60 bg-transparent lg:pl-30 lg:pr-10 pt-12 lg:pt-0 flex flex-col items-center">
                                <div className="lg:space-y-3 space-y-1 xl:w-1/2">
                                    <h1 className="lg:text-[50px] text-3xl text-(--primary) font-surgena leading-10 wrap-break-word">group name</h1>
                                    <p className="text-[20px] text-white font-poppins mix-blend-normal">what is group for,what are you sharing?</p>
                                    <p className="text-[18px] text-white font-poppins mix-blend-normal">created january 2025</p>
                                </div>
                                <div className="w-9/12 lg:w-auto absolute lg:top-13 left-1/2 lg:right-90  transform -translate-x-1/2  lg:translate-x-80 -translate-y-1/2 top-0">
                                    <Buttons change={true} children={'report group'} styling={'py-7'} />
                                </div>
                            </div>
                            <div className="border border-transparent w-50 h-50 rounded-full absolute lg:left-20 lg:bottom-42 lg:top-17 lg:translate-x-0 -top-35 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
                                <div className="w-full h-full relative bg-(--primary) rounded-full">
                                    <Image src={'/9753369e339a3a93305fa4c533636d3e.jpg'} alt="pfp" className="rounded-full aspect-square object-cover" fill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="w-full h-auto space-y-5">
                    <div className="w-full h-full space-y-5 ">
                        <div className="w-full md:w-1/2 h-full flex justify-between items-center">
                            <button onClick={() => handleclick(1)} className={`text-[17px] hover:text-white ${`${display === 'overview' ? 'text-(--primary)' : 'text-gray-400'}`} font-poppins font-bold`}>Overview</button>
                            <button onClick={() => handleclick(2)} className={`text-[17px] hover:text-white ${`${display === 'videos' ? 'text-(--primary)' : 'text-gray-400'}`} font-poppins font-bold`}>Videos</button>
                            <button onClick={() => handleclick(3)} className={`text-[17px] hover:text-white ${`${display === 'members' ? 'text-(--primary)' : 'text-gray-400'}`} font-poppins font-bold`}>Members</button>
                        </div>
                        {/*underline*/}
                        <div className="w-full h-px border border-gray-500"></div>
                    </div>
                    {display === 'overview' && <Overview />}
                    {display === 'videos' && <Videos />}
                    {display === 'members' && <Members />}
                </main>
            </div>
        </div>
    )
}