"use client"
import Aside from "@/component/sidebar.js"
import Buttons from "@/component/buttons.js"
import Image from "next/image"
import { HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function HOME() {
    const [toggle,setfunction] = useState('scale-0');

    const handleclick = () => {
        if(toggle === "scale-0"){
            setfunction("scale-100")
        }
        else{
            setfunction("scale-0")
        }
    }
    return (
        <div className="w-full h-screen flex-1 flex bg-(--bg-main) overflow-hidden">
            <Aside />
            <main className="w-full h-full sm:px-10 px-3 pl-20 py-6 pb-15 space-y-7">
                <div className="w-full flex flex-col items-start space-y-5 md:space-y-0 md:items-center md:flex-row justify-between">
                    <h1 className="text-[50px] text-white font-surgena font-semibold">My Groups</h1>
                    <div>
                        <Buttons children={'create group'} change={true} />
                    </div>
                </div>
                <div className="flex flex-col gap-y-5">
                    <Link href={''}>
                        <div className="w-full h-auto md:h-90 lg:h-60 bg-(--border) rounded-3xl p-5 flex">
                            <div className="w-10/12 sm:w-full h-auto flex flex-col lg:flex-row items-start gap-5 ">
                                <div className="w-30 md:w-50 h-30 md:h-50 lg:h-full relative rounded-full aspect-square">
                                    <Image src={'/9753369e339a3a93305fa4c533636d3e.jpg'} fill alt="group picture" className="object-center object-cover aspect-square rounded-full" />
                                </div>
                                <div className="space-y-1 sm:space-y-5 w-full min-w-60 h-auto">
                                    <p className="font-poppins text-2xl text-white font-medium wrap-break-word">group name</p>
                                    <p className="font-poppins text-[20px] text-gray-300">10 members</p>
                                </div>
                            </div>
                            <div className="md:pr-10 w-fit h-fit relative">
                                <button onClick={() => handleclick()}><HiDotsHorizontal id="icons1" className="cursor-pointer" /></button>
                                <div className={`w-43 space-y-2 absolute right-11 duration-300 ease-initial ${toggle}`}>
                                    <Buttons children={'remove group'} change={true} />
                                    <Buttons children={'report'} change={true} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    )
}