"use client"
import Image from "next/image";
import Buttons from "@/component/buttons.js"

export default function HOME() {
    let count = 0;
    return (
        <div className="w-full h-screen flex-1 overflow-hidden bg-(--bg-main) pb-20">
            <div className="w-full py-10 px-3 sm:px-10 h-fit relative">
                <div className="bg-(--primary-hover) w-full h-70 md:h-50 rounded-t-3xl">
                </div>
                <div className="w-full h-130 sm:h-100 lg:h-60 bg-[#262626] rounded-b-3xl pl-10 lg:pl-80 lg:pt-5 sm:pt-5 pt-15 lg:pr-25 xl:pr-40 flex flex-col lg:flex-row lg:justify-between justify-evenly">
                    <div className="space-y-3">
                        <h1 className="text-[50px] text-white font-surgena leading-10">User1</h1>
                        <p className="text-2xl text-white font-poppins">@user1</p>
                        <p className="text-[18px] text-white font-poppins">Joined march 2026</p>
                        <p className="text-[20px] text-white font-poppins">content creator,video lover,vibe coder</p>
                    </div>
                    <div className="flex lg:flex-row sm:flex-row flex-col lg:justify-between w-full lg:w-1/2 gap-7 sm:gap-20 lg:gap-0">
                        <div className="space-y-4">
                            <p className="text-[20px] text-white font-poppins"><span className="text-4xl text-(--primary)">20</span> Groups</p>
                            <p className="text-[20px] text-white font-poppins"><span className="text-4xl text-(--primary)">50</span> Videos</p>
                        </div>
                        <div className="space-y-4 w-7/12 sm:w-auto">
                            <Buttons change={true} children={'+ Add friend'} />
                            <Buttons styling={"bg-transparent text-white border border-white hover:bg-(--bg-secondary)"} children={'Report user'} />
                        </div>
                    </div>
                </div>
                <div className="border border-transparent w-50 h-50 rounded-full bg-(--primary) absolute lg:left-28 lg:bottom-42 lg:top-1/2 lg:translate-x-0 top-[35%] left-1/2 transfrom -translate-x-1/2 -translate-y-1/2">
                </div>
            </div>
            <div className="w-full">
                <h2 className="text-[50px] font-surgena text-white px-20 pb-7">Media</h2>
                <div className="w-full sm:px-10 px-3">
                    {/* Groups Grid */}
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full min-h-fit gap-y-7 gap-7">
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
    )
}