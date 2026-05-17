"use client"
import Image from "next/image"
import Inputs from "@/component/input.js"
import Button from "@/component/buttons.js"
import Links from "@/component/Link.js"
import { useMain } from "@/validations/forget_input_validations"

export default function HOME() {
    const { email, setEmail, error, validation } = useMain();
    const handleSubmition = (e) => {
        e.preventDefault();
        validation();
    }
    return (
        <div className="w-full h-screen flex-1 bg-(--bg-main) flex overflow-hidden">
            <div className="w-full md:w-1/2 space-y-10 flex flex-col justify-center items-center">
                <div className="space-y-5">
                    <h2 className="text-[50px] text-white font-surgena">Forget password</h2>
                    <p className="text-gray-300 text-[20px] font-poppins">Enter your email to get reset code</p>
                </div>
                <form onSubmit={handleSubmition} className="w-11/12 md:8/12 xl:w-7/12 space-y-4">
                    <Inputs types={'email'} place={'email'} valueit={email} setfunction={(e) => setEmail(e.target.value)} />
                    <div className="w-full h-2">
                        {error?.email && <p className="text-red-400 leading-0 text-center">{`${error?.email}`}</p>}
                    </div>
                    <div className="flex w-full space-x-5">
                        <Links children={'cancel'} styling={'bg-transparent text-white border border-white hover:bg-(--bg-secondary)'} page={'/'}/>
                        <Button change={true} children={'reset password'} type={'submit'} />
                    </div>
                </form>
            </div>
            <div className="w-1/2 hidden md:block h-auto py-6 px-10">
                <div className="w-full h-full rounded-4xl flex flex-col space-y-10 pl-7 pt-16" style={{ background: 'linear-gradient(135deg, #FCFF47 0%, #A5A5A5 100%)' }}>
                    <Image src={'/dikra-09.svg'} alt="logo" width={150} height={150} />
                    <div className="space-y-5">
                        <h1 className="font-surgena text-[65px] leading-20">Forgot Your <span className="text-(--bg-secondary)">Password</span>?</h1>
                        <p className="text-[20px] font-semibold font-poppins">No worries! It happens to everyone. We'll help you regain access to your account in just a few simple steps.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}