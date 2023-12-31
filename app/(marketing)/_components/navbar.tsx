import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="fixed top-0 w-full h-14 pt-2 px-4 border-b shadow-sm
        bg-white flex items-start">
            <div className="md:max-w-screen-2xl mx-auto flex items-start w-full justify-between">
            <Logo />
            <div className="space-x-4 md:block md:w-auto flex items-start justify-between w-full">
                <Button size="sm" variant="outline" asChild>
                    <Link href="/sing-in">
                    Login
                    </Link>
                </Button>
                <Button size="sm" asChild>
                <Link href="/sign-up">
                    Get Taskify for free
                    </Link>
                </Button>
            </div>
            </div>
        </div>
    )
}