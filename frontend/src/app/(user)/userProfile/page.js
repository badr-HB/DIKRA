"use client"
import Image from "next/image";
import Buttons from "@/component/buttons.js"
import Aside from "@/component/sidebar.js"

export default function HOME() {
    return (
        <div className="w-full h-screen flex-1 overflow-hidden bg-(--bg-main) flex">
            <Aside />
            <div className="w-full pb-20">
                <div className="w-full py-10 px-3 sm:px-10 h-fit relative">
                    <div className="w-full h-70 md:h-50 rounded-t-3xl relative">
                        <Image src={"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop"} fill alt="background photo" className="object-cover aspect-auto rounded-t-3xl" />
                    </div>
                    <div className="w-full h-170 sm:h-150 lg:h-110 xl:h-60 bg-[#262626] rounded-b-3xl pl-10 lg:pl-80 lg:pt-5 sm:pt-5 pt-15 lg:pr-25 xl:pr-20 flex flex-col xl:flex-row justify-evenly">
                        <div className="space-y-3 w-full xl:w-1/2">
                            <h1 className="text-[50px] text-white font-surgena leading-10">User1</h1>
                            <p className="text-2xl text-white font-poppins">@user1</p>
                            <p className="text-[18px] text-white font-poppins">Joined march 2026</p>
                            <p className="text-[20px] text-white font-poppins text-wrap md:text-nowrap">content creator,doom scroller,vibe coder</p>
                        </div>
                        <div className="flex md:flex-row sm:flex-row flex-col lg:justify-between w-full xl:w-1/2 gap-7 sm:gap-20 lg:gap-0">
                            <div className="space-y-4">
                                <p className="text-[20px] text-white font-poppins"><span className="text-4xl text-(--primary)">20</span> Groups</p>
                                <p className="text-[20px] text-white font-poppins"><span className="text-4xl text-(--primary)">50</span> Videos</p>
                            </div>
                            <div className="space-y-4 w-8/12 sm:w-auto">
                                <Buttons change={true} children={'+ Add friend'} />
                                <Buttons styling={"bg-transparent text-white border border-white hover:bg-(--bg-secondary)"} children={'Report user'} />
                            </div>
                        </div>
                    </div>
                    <div className="border border-transparent w-50 h-50 rounded-full absolute lg:left-28 lg:bottom-42 md:top-65 xl:top-1/2 lg:translate-x-0 top-[32%] left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full h-full relative bg-(--primary) rounded-full">
                            <Image src={''} alt="pfp" className=" rounded-full aspect-square object-cover" fill />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-[50px] font-surgena text-white px-20 pb-7">Media</h2>
                    <div className="w-full sm:px-10 px-3">
                        {/* Groups Grid */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 w-full min-h-fit gap-y-7 gap-7">
                            <div className="rounded-xl p-6 border  transition-all duration-300 transform hover:scale-105 cursor-pointer bg-(--border) border-(--border) flex-1">
                                {/* Group Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl bg-(--primary)">
                                        🎬
                                    </div>
                                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-(--primary)">
                                        <p className="text-[18px]">🌐 public</p>
                                    </div>
                                </div>

                                {/* Group Name */}
                                <h3 className="text-xl font-bold mb-2 font-poppins text-white">group name</h3>

                                {/* Members */}
                                <p className="text-gray-400 text-sm mb-6 font-poppins">members number</p>

                                {/* Action Button */}
                                <Buttons children={'View Videos'} change={true} />
                            </div>
                            {/********************* */}
                            <div className="rounded-xl p-6 border  transition-all duration-300 transform hover:scale-105 cursor-pointer bg-(--border) border-(--border) flex-1">
                                {/* Group Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl bg-(--primary)">
                                        🎬
                                    </div>
                                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-(--primary)">
                                        <p className="text-[18px]">🌐 public</p>
                                    </div>
                                </div>

                                {/* Group Name */}
                                <h3 className="text-xl font-bold mb-2 font-poppins text-white">group name</h3>

                                {/* Members */}
                                <p className="text-gray-400 text-sm mb-6 font-poppins">members number</p>

                                {/* Action Button */}
                                <Buttons children={'View Videos'} change={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}