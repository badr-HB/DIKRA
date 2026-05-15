import Link from "next/link";

export default function HOME({children,styling,change,type}){
    let unique = "hover:bg-(--primary-hover)";
    return(
        <button type={`${type === undefined ? 'button' : type}`} className={`h-10 rounded-[10px] px-6 w-full font-poppins font-bold cursor-pointer bg-(--primary) flex items-center justify-center ${styling} ${change ? unique : ""}`}>{`${children}`}</button>
    )
}
