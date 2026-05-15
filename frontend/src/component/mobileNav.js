import Image from "next/image";
import Links from "@/component/Link.js";

export default function HOME({ variable }) {

    return (
        <div className={`absolute duration-800 ease-linear ${variable} top-0`}>
            <nav className="w-screen h-screen relative flex-1 overflow-y-auto bg-white">
                <div className="w-full h-full px-15 py-15 bg-(--bg-main) space-y-13">
                    <Image src={'/dikra-08.svg'} width={130} height={130} alt="logo" className="" />
                    <ol className="cursor-pointer w-4/10 text-[18px] font-poppins font-semibold wrap-anywhere text-white space-y-9">
                        <li id="underlines"><a href="#HOME">Home</a></li>
                        <li id="underlines"><a href="#FEATURES">Features</a></li>
                        <li id="underlines"><a href="#EXPLORE">Explore</a></li>
                        <li id="underlines"><a href="#HOW_IT_WORKS">How it Works</a></li>
                    </ol>
                    <div className="w-7/12 sm:w-3/12 space-y-6">
                        <Links children={"Log in"} styling={"bg-transparent text-white border border-white hover:bg-(--bg-secondary)"} page={'/sign_up'}/>
                        <Links children={"Sign up"} change={true} />
                    </div>
                </div>
            </nav>
        </div>
    )
}