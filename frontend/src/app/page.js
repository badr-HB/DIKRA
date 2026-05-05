
import Image from "next/image";
import Links from "@/componement/Link.js";
import Buttons from "@/componement/buttons.js";
import { FaHeart, FaUserFriends, FaUserAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoMdCloudUpload, IoMdPersonAdd } from "react-icons/io";
import MuxPlayer from '@mux/mux-player-react';
import { IoSpeedometer } from "react-icons/io5";
import { MdHighQuality } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { RiAdminLine, RiTwitterXLine } from "react-icons/ri";
import { PiChatCenteredSlashBold } from "react-icons/pi";
import { FaLock, FaArrowRightLong, FaEye, FaTiktok } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";


export default function HOME() {
  return (
    <div className="w-full h-screen bg-(--bg-main) flex-1 px-15">
      {/* navbar */}
      <nav className="w-full h-20 relative flex items-center justify-center ">
        <div className="w-full h-20 flex justify-between items-center fixed px-15 bg-(--bg-main) z-10">
          <Image src={'/dikra-08.svg'} width={110} height={110} alt="logo" />
          <ol className="cursor-pointer w-4/10 text-[16px] font-poppins font-semibold flex justify-between wrap-anywhere text-white">
            <li id="underlines"><a href="#HOME">Home</a></li>
            <li id="underlines"><a href="#FEATURES">Features</a></li>
            <li id="underlines"><a href="#EXPLORE">Explore</a></li>
            <li id="underlines"><a href="#HOW_IT_WORKS">How it Works</a></li>
          </ol>
          <div className="w-2/10 flex gap-5">
            <Links children={"Log in"} styling={"bg-transparent text-white border border-white hover:bg-(--bg-secondary)"} />
            <Links children={"Sign up"} change={true} />
          </div>
        </div>
      </nav>
      {/*  *************  */}
      <main>
        <section id="HOME" className="w-auto flex items-center justify-center h-140 -mx-15 px-0 bg-[url('../../public/Gemini_Generated_Image_moe58smoe58smoe5.png')] bg-cover bg-no-repeat bg-center">
          <div className="w-10/12 space-y-7">
            <h1 className="font-surgena font-black text-(--text-main) text-[50px] leading-[50%]">Share your moments. Privately or publicly</h1>
            <p className="font-inter font-medium text-[20px] text-white">Upload videos, photos, and records. Share with friends or groups.</p>
            <div className="w-3/12 flex gap-3">
              <Links styling={"py-8"} change={true} children={"Get Started"} />
            </div>
            <div className="w-5/10 flex gap-5">
              <div className="w-fit flex items-center gap-0">
                <Image src={'/face0.jpg'} width={40} height={40} className="rounded-full object-center object-cover aspect-square" alt="person" />
                <Image src={'/face4.jpg'} width={40} height={40} className="rounded-full object-center object-cover aspect-square" alt="person" />
                <Image src={'/face10.jpg'} width={40} height={40} className="rounded-full object-center object-cover aspect-square" alt="person" />
              </div>
              <p className="font-normal text-gray-200 text-[14px]">Join thousands of users<br />sharing their moments daily</p>
            </div>
          </div>
        </section>
        <div className="w-full bg-[#262626] border border-[#383838] rounded-4xl py-8 px-35 space-y-6 mt-25 mb-25 font-poppins">
          <div className="flex w-fit gap-5 items-center place-self-center">
            <p className="font-semibold text-[17px] text-white">Trusted by thousands around the world</p>
            <FaHeart className="text-(--primary) w-7 h-7" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="bg-white w-fit p-5 rounded-full">
                <FaUserAlt className="w-8 h-8 " />
              </div>
              <div>
                <p className="font-bold text-4xl text-white">10k+</p>
                <p className="font-semibold text-[20px] text-gray-400">Users</p>
              </div>
            </div>
            {/******************************************************************************/}
            <div className="flex items-center gap-5">
              <div className="bg-white w-fit p-4 rounded-full">
                <IoMdCloudUpload className="w-11 h-11 " />
              </div>
              <div>
                <p className="font-bold text-4xl text-white">50k+</p>
                <p className="font-semibold text-[20px] text-gray-400">Uploads</p>
              </div>
            </div>
            {/******************************************************************************/}
            <div className="flex items-center gap-5">
              <div className="bg-white w-fit p-4 rounded-full">
                <FaUserFriends className="w-11 h-11 " />
              </div>
              <div>
                <p className="font-bold text-4xl text-white">1k+</p>
                <p className="font-semibold text-[20px] text-gray-400">Groups Created</p>
              </div>
            </div>
            {/*****************************************************************************/}
          </div>
        </div>
        <section className="w-auto mb-15 font-poppins flex items-center justify-center space-x-20 bg-[#292929] relative -mx-15 px-0 py-15" id="FEATURES">
          <MuxPlayer playbackId={'ZGx47GFFEJr2XnGosLew13tyhXlFwfVwktqFL00rbxV8'} accentColor="var(--primary-hover)" className="w-6/12 overflow-hidden rounded-2xl shadow-xl" autoPlay="muted" loop />
          <div className="h-6/12 space-y-3">
            <p className="text-[16px]  font-medium text-white">SHARE FREELY</p>
            <h2 className=" font-bold text-[50px] leading-[100%] text-(--primary) font-surgena">Share anything,<br /><span className="">instantly</span></h2>
            <p className=" font-medium text-[16px] text-gray-300">Upload videos, photos, or records and share<br />them with the world or just your circle.</p>
            {/* */}
            <div className="w-full flex items-center gap-7">
              <IoSpeedometer id="icons" />
              <div className="w-full space-y-1">
                <p className=" font-medium text-[16px] text-white">Fast uploads</p>
                <p className=" font-normal text-[16px] text-gray-300">Get your content online in seconds.</p>
              </div>
            </div>
            {/* */}
            <div className="w-full flex items-center gap-7">
              <MdHighQuality id="icons" />
              <div className="w-full space-y-1">
                <p className=" font-medium text-[16px] text-white">High</p>
                <p className=" font-normal text-[16px] text-gray-300">We keep your videos and photos in original quality.</p>
              </div>
            </div>
            {/* */}
            <div className="w-full flex items-center gap-7">
              <GrSecure id="icons" />
              <div className="w-full space-y-1">
                <p className=" font-medium text-[16px] text-white">Secure storage</p>
                <p className=" font-normal text-[16px] text-gray-300">Your memories are safe with us.</p>
              </div>
            </div>
          </div>
        </section>
        {/* */}
        <section className="w-full flex items-center justify-between mb-29 mt-29" id="EXPLORE">
          <div className="h-4/12 space-y-5">
            <p className="text-[16px]  font-medium text-white">PRIVATE GROUPS</p>
            <h2 className=" font-bold text-[50px] leading-[100%] text-(--primary) font-surgena">Create private<br />groups</h2>
            <p className=" font-medium text-[16px] text-gray-300">Share moments with your closest friends<br />without distractions. No chat. Just memories.</p>
            {/* */}
            <div className="w-full flex items-center gap-7">
              <IoMdPersonAdd id="icons" />
              <div className="w-full space-y-1">
                <p className=" font-medium text-[16px] text-white">Invite-only groups</p>
                <p className=" font-normal text-[16px] text-gray-300">Only people you invite can join.</p>
              </div>
            </div>
            {/* */}
            <div className="w-full flex items-center gap-7">
              <RiAdminLine id="icons" />
              <div className="w-full space-y-1">
                <p className=" font-medium text-[16px] text-white">Admin control</p>
                <p className=" font-normal text-[16px] text-gray-300">Admin control members and content.</p>
              </div>
            </div>
            {/* */}
            <div className="w-full flex items-center gap-7">
              <PiChatCenteredSlashBold id="icons" />
              <div className="w-full space-y-1">
                <p className=" font-medium text-[16px] text-white">Media-only sharing</p>
                <p className=" font-normal text-[16px] text-gray-300">No chats. Just videos, photos, and records.</p>
              </div>
            </div>
            <div className="w-8/12">
              <Links styling={"bg-transparent text-white border border-white hover:bg-(--bg-secondary)"} children={"Create your group"} />
            </div>
          </div>
          <div className="w-8/12 bg-[#292929] p-8 space-y-5 rounded-2xl">
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center gap-3">
                <Image src={'/pexels-silverkblack-36729906.jpg'} width={85} height={85} className="overflow-hidden aspect-square object-cover rounded-full" alt="group" />
                <div>
                  <p className="text-white text-2xl font-poppins font-semibold">The Friends</p>
                  <p className="text-gray-400 font-poppins font-medium">5 members</p>
                </div>
              </div>
              <div className="w-4/12">
                <Buttons children={"+ Invite"} change={true} />
              </div>
            </div>
            <div className="w-full space-y-3">
              <div className="w-full grid grid-cols-3 grid-rows-1 gap-3">
                <button className="text-[19px] text-white font-poppins bg-gray-400 py-6 rounded-2xl">Media</button>
                <button className="text-[19px] text-white font-poppins hover:bg-gray-400 py-6 rounded-2xl">Members</button>
              </div>
              <div className="w-full h-80 grid grid-cols-3 relative space-y-3 gap-3">
                <div className="relative h-full"><Image src={'/pexels-kiran-patel-83913791-23630487.png'} fill className="rounded-2xl" alt="scene" /></div>
                <div className="relative h-full"><Image src={'/counter.png'} fill className="rounded-2xl" alt="scene" /></div>
                <div className="relative h-full"><Image src={'/pexels-francian0-12940327.png'} fill className="rounded-2xl" alt="scene" /></div>
                <div className="relative h-full"><Image src={'/pexels-vladimirsrajber-24705717.png'} fill className="rounded-2xl" alt="scene" /></div>
                <div className="relative h-full"><Image src={'/pexels-vadim-timayev-119582430-12365431.png'} fill className="rounded-2xl" alt="scene" /></div>
                <div className="relative h-full"><Image src={'/pexels-juliano-goncalves-1623825-18933522.png'} fill className="rounded-2xl" alt="scene" /></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex gap-11 mb-20">
          <div className="w-4/12 rounded-[50px] rounded-bl-none py-5 flex flex-col justify-center items-center space-y-3 bg-[#292929]">
            <div className="rounded-full bg-black w-18 h-18 flex items-center justify-center">
              <FaLock id="icons" />
            </div>
            <p className="text-2xl text-white font-poppins font-semibold">Private Account</p>
            <p className="text-[14px] text-gray-400 font-poppins font-medium text-center">keep your account private and<br />control who can see your content.</p>
          </div>
          <div className="w-4/12 rounded-[50px] rounded-bl-none py-5 flex flex-col justify-center items-center space-y-3 bg-[#292929]">
            <div className="rounded-full bg-black w-18 h-18 flex items-center justify-center">
              <FaUserFriends id="icons" />
            </div>
            <p className="text-2xl text-white font-poppins font-semibold">Group Only Sharing</p>
            <p className="text-[14px] text-gray-400 font-poppins font-medium text-center">Share your media only with<br />selected groups.</p>
          </div>
          <div className="w-4/12 rounded-[50px] rounded-bl-none py-5 flex flex-col justify-center items-center space-y-3 bg-[#292929]">
            <div className="rounded-full bg-black w-18 h-18 flex items-center justify-center">
              <AiOutlineSafetyCertificate id="icons" />
            </div>
            <p className="text-2xl text-white font-poppins font-semibold">Full Control</p>
            <p className="text-[14px] text-gray-400 font-poppins font-medium text-center">You decide What's public, private,<br />or shared with groups.</p>
          </div>
        </section>
        <section className="w-full mb-35" id="HOW_IT_WORKS">
          <div className="w-full space-y-3 mb-24">
            <p className="text-2xl text-white font-poppins font-semibold text-center">HOW IT WORKS</p>
            <h2 className=" font-bold text-[50px] leading-[100%] text-(--primary) font-surgena text-center">Sharing moments is easy</h2>
            <div className="w-full flex items-center">
              <div className="w-4/12 flex flex-col items-center justify-center space-y-4">
                <div className="bg-(--bg-secondary) w-14 h-14 flex items-center justify-center rounded-full">
                  <IoMdCloudUpload id="icons" className="text-black!" />
                </div>
                <div className="w-5 h-5 bg-(--primary) rounded-full flex items-center justify-center">
                  <p className="font-poppins font-medium text-[18px] text-black">1</p>
                </div>
                <div className="w-6/12">
                  <p className="font-poppins text-white text-[20px] font-medium text-center">Upload your media</p>
                  <p className="font-poppins text-gray-400 text-center">Upload videos,photos,or records from your device.</p>
                </div>
              </div>
              {/***************************************************************************/}
              <FaArrowRightLong className="w-fit" id="icons" />
              {/***************************************************************************/}
              <div className="w-4/12 flex flex-col items-center justify-center space-y-4">
                <div className="bg-(--bg-secondary) w-14 h-14 flex items-center justify-center rounded-full">
                  <FaTelegramPlane id="icons" className="text-black!" />
                </div>
                <div className="w-5 h-5 bg-(--primary) rounded-full flex items-center justify-center">
                  <p className="font-poppins font-medium text-[18px] text-black">2</p>
                </div>
                <div className="w-6/12">
                  <p className="font-poppins text-white text-[20px] font-medium text-center">Share with others</p>
                  <p className="font-poppins text-gray-400 text-center">Your media appears in selected groups.</p>
                </div>
              </div>
              {/****************************************************************************/}
              <FaArrowRightLong className="w-fit" id="icons" />
              {/***************************************************************************/}
              <div className="w-4/12 flex flex-col items-center justify-center space-y-4">
                <div className="bg-(--bg-secondary) w-14 h-14 flex items-center justify-center rounded-full">
                  <FaEye id="icons" className="text-black!" />
                </div>
                <div className="w-5 h-5 bg-(--primary) rounded-full flex items-center justify-center">
                  <p className="font-poppins font-medium text-[18px] text-black">3</p>
                </div>
                <div className="w-6/12">
                  <p className="font-poppins text-white text-[20px] font-medium text-center">View and enjoy</p>
                  <p className="font-poppins text-gray-400 text-center">Watch, download and enjoy moments together anytime.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-44 bg-[#292929] rounded-2xl flex items-center justify-center gap-40 shadow-[0px_0px_60px_var(--primary)]">
            <div className="w-6/12 space-y-2">
              <h2 className=" font-bold text-[50px] leading-[100%] text-white font-surgena">Start sharing <span className="text-(--primary)">your world</span> today</h2>
              <p className="font-medium font-poppins text-3xl text-gray-400">Simple. Private. Powerful.</p>
            </div>
            <div className="w-2/12">
              <Links styling={'py-8'} change={true} children={'Get Started'} />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-auto space-y-5 bg-[#121212] py-7 -mx-15 px-15">
        <div className="w-full flex ">
          <div className="w-3/12 space-y-3">
            <Image src={'/dikra-08.svg'} width={105} height={105} alt="logo" />
            <p className="text-[15px] text-gray-500 font-poppins">A platform to share your<br />moments your way.</p>
            <div className="flex space-x-3">
              <button className="w-fi h-fit cursor-pointer"><BsInstagram className="w-5 h-5 text-gray-500 hover:text-gray-300" /></button>
              <button className="w-fi h-fit cursor-pointer"><RiTwitterXLine className="w-5 h-5 text-gray-500 hover:text-gray-300" /></button>
              <button className="w-fi h-fit cursor-pointer"><FaYoutube className="w-5 h-5 text-gray-500 hover:text-gray-300" /></button>
              <button className="w-fi h-fit cursor-pointer"><FaTiktok className="w-5 h-5 text-gray-500 hover:text-gray-300" /></button>
            </div>
          </div>
          <div className="w-3/12 space-y-3">
            <p className="text-2xl text-white font-poppins">Product</p>
            <div className="flex flex-col items-start">
              <button id="footer_text">Features</button>
              <button id="footer_text">Groups</button>
              <button id="footer_text">Upload</button>
              <button id="footer_text">Explore</button>
            </div>
          </div>
          <div className="w-3/12 space-y-3">
            <p className="text-2xl text-white font-poppins">Company</p>
            <div className="flex flex-col items-start">
              <button id="footer_text">About Us</button>
              <button id="footer_text">Contact</button>
              <button id="footer_text">Blog</button>
              <button id="footer_text">Careers</button>
            </div>
          </div>
          <div className="w-3/12 space-y-3">
            <p className="text-2xl text-white font-poppins">Legal</p>
            <div className="flex flex-col items-start">
              <button id="footer_text">Privacy Policy</button>
              <button id="footer_text">Terms of Service</button>
              <button id="footer_text">Community Guidelines</button>
              <button id="footer_text">DMCA</button>
            </div>
          </div>
        </div>
        <div className="w-full h-px border border-gray-500"></div>
        <p className="text-gray-400 text-[15px] text-center">© 2026 DIKRA. All rights reserved.</p>
      </footer>
    </div>
  )
}