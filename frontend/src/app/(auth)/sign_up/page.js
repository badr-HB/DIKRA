import Image from "next/image"
import Links from "@/componement/Link.js"
import Button from "@/componement/buttons.js"

export default function HOME() {
    return (
        <div className="w-full h-screen bg-(--bg-main) flex-1 flex">
            <div className="w-1/2 h-screen py-6 px-6">
                <div className="w-full h-full border border-(--primary) relative rounded-[40px]">
                    <Image src={'/background_dikra.png'} fill alt="brand" className="rounded-[40px]" />
                </div>
            </div>
            <div className="w-1/2">
                <div>
                    <h1 className="text-white text-[50px] font-surgena">Create an account</h1>
                    <div className="w-1/2 flex items-center">
                        <p className="text-gray-400 text-[17px] font-poppins">Already have an account?</p>
                        <div className="w-4/12">
                            <Links styling={'bg-transparent text-(--primary) underline hover:text-(--primary-hover)'} children={'Log in'} />
                        </div>
                    </div>
                </div>
                <form action={''}>
                    <input type="text" placeholder="name" className="placeholder:text-white text-white" />
                    <input type="email" placeholder="email" className="placeholder:text-white text-white" />
                    <input type="password" placeholder="password" className="placeholder:text-white text-white" />
                    <div>
                        <Button />
                    </div>
                </form>
            </div>
        </div>
    )
}