import Link from "next/link"

export const LandingFooter=()=>{
    return(
        <div className="text-white text-center py-4 text-xl">
            
            <p className="inline-block">
                Crafted by
            </p>
        {" "} 
            <Link href={"https://shivakodes.me"} className="text-red-400 hover:text-white">
                Shiva
            </Link>
        </div>
    )
}