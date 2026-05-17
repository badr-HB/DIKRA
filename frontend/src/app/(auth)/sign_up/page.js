'use client'
import Image from "next/image"
import Links from "@/component/Link.js"
import Button from "@/component/buttons.js"
import Inputs from "@/component/input.js"
import { useMain } from "@/validations/sign_up_input_validations"
import { useState } from "react"

export default function HOME() {

    const { password, setPassword, email, setEmail, name, setName, error, validation } = useMain();
    const [copy, repassword] = useState('');
    const [notsame, setwarning] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (copy !== password) {
            return setwarning("password don't match please check again");
        }
        else {
            setwarning("")
        }
        validation();
    }


    return (
        <div className="w-full h-screen md:bg-(--bg-main) md:bg-none bg-[url(/dikra_no_words.png)] bg-cover bg-center flex-1 flex overflow-hidden">
            <div className="w-1/2 h-screen py-6 px-6 hidden md:block">
                <div className="w-full h-full border border-(--primary) relative rounded-[40px]">
                    <Image src={'/background_dikra.png'} fill alt="brand" className="rounded-[40px] object-cover" />
                </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center space-y-10">
                <div>
                    <h1 className="text-white text-[50px] font-surgena">Create an account</h1>
                    <div className="w-full flex items-center">
                        <p className="text-gray-400 text-[17px] font-poppins">Already have an account?</p>
                        <div className="w-auto">
                            <Links styling={'bg-transparent text-(--primary) underline hover:text-(--primary-hover)'} children={'Log in'} page={'/log_in'}/>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-11/12 md:8/12 xl:w-7/12 space-y-5">
                    <Inputs types={'text'} place={'name'} valueit={name} setfunction={(e) => setName(e.target.value)} />
                    <div className="w-full h-auto">
                        {error?.user && <p className="text-red-400 leading-0 text-center">{`${error?.user}`}</p>}
                    </div>
                    <Inputs types={'email'} place={'email'} valueit={email} setfunction={(e) => setEmail(e.target.value)} />
                    <div className="w-full h-auto">
                        {error?.email && <p className="text-red-400 leading-0 text-center">{`${error?.email}`}</p>}
                    </div>
                    <Inputs types={'passowrd'} place={'password'} valueit={password} setfunction={(e) => setPassword(e.target.value)} />
                    <div className="w-full h-auto">
                        {error?.password && <p className="text-red-400 leading-0 text-center break-all">{`${error?.password}`}</p>}
                    </div>
                    <Inputs types={'password'} place={'confirm password'} valueit={copy} setfunction={(e) => repassword(e.target.value)} />
                    <div className="w-full h-auto">
                        {notsame && <p className="text-red-400 leading-0 text-center">{`${notsame}`}</p>}
                    </div>
                    <div className="mt-2">
                        <Button children={'sign up'} change={true} styling={'py-6'} type={'submit'} />
                    </div>
                </form>
            </div>
        </div>
    )
}