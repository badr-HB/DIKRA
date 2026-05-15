"use client"
import Button from "@/component/buttons.js"
import Links from "@/component/Link.js"
import Image from "next/image"
import { useMain } from "@/validations/log_in_input_validations.js"

export default function HOME() {

    const { password, setPassword, email, setEmail, validation, error } = useMain()

    const handleSubmition = (e) => {
        e.preventDefault();
        validation();
    }


    return (
        <div className="w-full h-screen flex-1 bg-(--bg-main) flex overflow-hidden">
            <div className="w-full md:w-1/2 space-y-10 flex flex-col justify-center items-center">
                <div className="space-y-5">
                    <h2 className="text-[50px] text-white font-surgena">Sign in</h2>
                    <p className="text-gray-300 text-[20px] font-poppins">Enter your credentials to access your account</p>
                    <div className="flex items-center">
                        <p className="text-gray-300 text-[17px] font-poppins">Don't have an account?</p>
                        <div className="w-fit">
                            <Links styling={'bg-transparent text-(--primary) underline hover:text-(--primary-hover)'} children={'Create one'} page={'/sign_up'} />
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmition} className="w-11/12 md:8/12 xl:w-7/12 space-y-4">
                    <input type="email" placeholder="email" className="" id="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="w-full h-auto">
                        {error?.email && <p className="text-red-400 leading-0 text-center">{`${error?.email}`}</p>}
                    </div>
                    <input type="password" placeholder="password" className="" id="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="w-full h-auto">
                        {error?.password && <p className="text-red-400 leading-0 text-center break-all">{`${error?.password}`}</p>}
                    </div>
                    <div className="w-7/12 sm:w-6/12 flex place-self-end  place-content-end">
                        <Links styling={'bg-transparent text-blue-400 font-semibold underline hover:text-blue-500 pr-0'} children={'Forgot password?'} page={'/forget_password'} />
                    </div>
                    <Button change={true} children={'log in'} type={'submit'}/>
                </form>
            </div>
            <div className="w-1/2 hidden md:block h-auto py-6 px-10">
                <div className="w-full h-full rounded-4xl flex flex-col space-y-10 pl-7 pt-16" style={{ background: 'linear-gradient(135deg, #FCFF47 0%, #A5A5A5 100%)' }}>
                    <Image src={'/dikra-09.svg'} alt="logo" width={150} height={150} />
                    <div className="space-y-5">
                        <h1 className="font-surgena text-[65px] leading-20">Welcome Back,<br /><span className="text-(--bg-secondary)">Honored USER</span></h1>
                        <p className="text-[20px] font-semibold font-poppins">Step into your world. Access your dashboard, manage your media, and unlock endless possibilities with our powerful platform.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}