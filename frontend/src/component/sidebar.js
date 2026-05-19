"use client"
import Image from "next/image"
import Link from "next/link"
import { BiSolidDashboard } from "react-icons/bi";
import { CgProfile, CgToggleSquareOff } from "react-icons/cg";
import { PiUsersBold } from "react-icons/pi";
import { CiSaveDown2 } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import Buttons from "@/component/buttons.js"
import { useState } from "react";

export default function HOME() {
    const [toggle, settoggle] = useState('left-0')

    const handleclick = () => {
        if (toggle === "left-0") {
            settoggle('-left-52')
        }
        else if (toggle === "-left-52") {
            settoggle('left-0')
        }
        console.log(213);

    }

    return (
        <div className={`w-20 relative z-50`}>
            <div className={`w-70 h-screen bg-(--border) fixed ${toggle} duration-500 ease-out flex-1`}>
                <div className={`w-70 h-full flex-1 flex flex-col py-5 space-y-8 relative ${toggle === '-left-52' ? 'invisible' : 'visible'}`}>
                    <button type="button" className={`absolute right-5 top-2 cursor-pointer visible`} onClick={() => handleclick()}>
                        <CgToggleSquareOff className="" id="icons" />
                    </button>
                    <Link href={'/'} className="w-fit h-fit pl-7" ><Image src={'/dikra-08.svg'} width={180} height={150} className="" alt="logo" /></Link>
                    <div className="w-full flex flex-col items-center">
                        <Link href={'/Dashboard'} className="w-10/12 flex items-center gap-6 py-4 pl-6 rounded-2xl hover:bg-(--card)">
                            <BiSolidDashboard className="text-(--primary-hover) w-6 h-6" />
                            <p className="text-white font-poppins text-[20px] font-medium">Dashboard</p>
                        </Link>
                        <Link href={'/userProfile'} className="w-10/12 flex items-center gap-6 py-4 pl-6 rounded-2xl hover:bg-(--card)">
                            <CgProfile className="text-(--primary-hover) w-6 h-6" />
                            <p className="text-white font-poppins text-[20px] font-medium">My Profile</p>
                        </Link>
                        <Link href={'/userGroups'} className="w-10/12 flex items-center gap-6 py-4 pl-6 rounded-2xl hover:bg-(--card)">
                            <PiUsersBold className="text-(--primary-hover) w-6 h-6" />
                            <p className="text-white font-poppins text-[20px] font-medium">My Groups</p>
                        </Link>
                        <Link href={'/Savings'} className="w-10/12 flex items-center gap-6 py-4 pl-6 rounded-2xl hover:bg-(--card)">
                            <CiSaveDown2 className="text-(--primary-hover) w-6 h-6" />
                            <p className="text-white font-poppins text-[20px] font-medium">Saved Media</p>
                        </Link>
                        <Link href={'/Notifications'} className="w-10/12 flex items-center gap-6 py-4 pl-6 rounded-2xl hover:bg-(--card)">
                            <IoIosNotifications className="text-(--primary-hover) w-6 h-6" />
                            <p className="text-white font-poppins text-[20px] font-medium">Notifications</p>
                        </Link>
                        <Link href={'/Settings'} className="w-10/12 flex items-center gap-6 py-4 pl-6 rounded-2xl hover:bg-(--card)">
                            <IoSettingsSharp className="text-(--primary-hover) w-6 h-6" />
                            <p className="text-white font-poppins text-[20px] font-medium">Settings</p>
                        </Link>
                    </div>
                    <div className="w-10/12 h-full flex-1 flex items-end place-self-center">
                        <Buttons children={'Upload'} change={true} styling={'py-7'} />
                    </div>
                </div>
            </div>
        </div>
    )
}