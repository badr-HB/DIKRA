import Image from "next/image"
import Link from "next/link"
import Inputs from "@/component/input.js"

export const Overview = () => {
    return (
        <section className="w-full h-full flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-8/12 h-full space-y-7">
                {/*about the group*/}
                <div className="w-full h-auto space-y-4 p-6 rounded-2xl border border-white/40 bg-(--border)">
                    <h2 className="text-[30px] text-(--primary) font-poppins font-bold">About This Group</h2>
                    <p className="text-[18px] text-gray-300 font-poppins font-medium">write here what this group is for and what you can and should share in this space,thanks.</p>
                </div>
                {/*welcome*/}
                <div className="w-full h-auto space-y-4 p-6 rounded-2xl border border-white/40 bg-(--border)">
                    {/*pfp*/}
                    <div className="w-full h-auto flex items-center gap-x-6">
                        <div className="bg-(--primary) w-20 h-20 rounded-full relative overflow-hidden">
                            <Image src={''} alt="pfp" fill className="rounded-full aspect-square" />
                        </div>
                        <div>
                            <p className="text-2xl text-white font-poppins font-semibold">user1</p>
                            <p className="text-[18px] text-gray-400 font-poppins font-medium">Admin</p>
                        </div>
                    </div>
                    <h2 className="text-[30px] text-(--primary) font-poppins font-bold">Welcome to group name</h2>
                    <p className="text-white font-poppins font-medium">Feel free to introduce yourself and share your favorite travel moments. Let’s build an amazing community together.</p>
                </div>
            </div>
            <div className="w-full lg:w-4/12 h-full space-y-7">
                <div className="w-full h-auto space-y-4 p-6 rounded-2xl border border-white/40 bg-(--border)">
                    <h2 className="text-[30px] text-(--primary) font-poppins font-bold">Group Info</h2>
                    <div className="space-y-3">
                        <div className="w-full flex justify-between">
                            <p className="text-[16px] text-gray-300 font-poppins font-medium">Group Type</p>
                            <p className="text-[16px] text-gray-300 font-poppins font-medium">Public</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="text-[16px] text-gray-300 font-poppins font-medium">Visibility</p>
                            <p className="text-[16px] text-gray-300 font-poppins font-medium">Anyone can join</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="text-[16px] text-gray-300 font-poppins font-medium">Content</p>
                            <p className="text-[16px] text-gray-300 font-poppins font-medium">All Ages</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto space-y-4 p-6 rounded-2xl border border-white/40 bg-(--border)">
                    <h2 className="text-[30px] text-(--primary) font-poppins font-bold">Group Rules</h2>
                    <div className="w-full flex flex-col pl-5 space-y-3">
                        <p className="text-[16px] text-gray-300 font-poppins font-medium">Be respectful to all members</p>
                        <p className="text-[16px] text-gray-300 font-poppins font-medium">No NSFW or inappropriate content</p>
                        <p className="text-[16px] text-gray-300 font-poppins font-medium">Be respectful to all members</p>
                        <p className="text-[16px] text-gray-300 font-poppins font-medium">Be respectful to all members</p>
                    </div>
                </div>
                <div className="w-full h-auto space-y-4 p-6 rounded-2xl border border-white/40 bg-(--border)">
                    <h2 className="text-[30px] text-(--primary) font-poppins font-bold">Group Stats</h2>
                    <div className="w-full h-full flex gap-6">
                        <div className="w-1/2 rounded-2xl border border-white/40 bg-(--bg-main) py-3 text-center">
                            <p className="text-[26px] text-(--primary) font-poppins font-bold">128</p>
                            <p className="text-[15px] text-gray-400 font-poppins font-medium">Members</p>
                        </div>
                        <div className="w-1/2 rounded-2xl border border-white/40 bg-(--bg-main) py-3 text-center">
                            <p className="text-[26px] text-(--primary) font-poppins font-bold">331</p>
                            <p className="text-[15px] text-gray-400 font-poppins font-medium">Videos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Videos = () => {
    return (
        <section className="w-full">
            <div className="w-full flex flex-col sm:flex-row justify-between space-y-7 sm:space-y-0">
                <h2 className="text-[30px] text-(--primary) font-poppins font-bold">Videos</h2>
                <div className="xl:w-3/12 lg:w-5/12 w-full sm:w-1/2">
                    <Inputs types={'search'} place={'search videos...'} style={'py-7'}/>
                </div>
            </div>
        </section>
    )
}

export const Members = () => {
    return (
        <main>
            <h1 className="text-green-700">jew</h1>
        </main>
    )
}