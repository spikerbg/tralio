import Logo from "@/components/logo";

export default function Navbar(){
    return(
        <div className="fixed top-0 w-full h-14 pt-2 px-4 border-b shadow-sm
        bg-white flex items-start">
            <div className="md:max-w-screen-2xl mx-auto flex items-start w-full justify-between">
            <Logo />
            </div>
        </div>
    )
}