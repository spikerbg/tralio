import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="fixed bottom-0 w-full pt-2 p-4 border-t
       bg-slate-100">
            <div className="md:max-w-screen-2xl mx-auto flex items-start w-full justify-between">
            <Logo />
            <div className="space-x-4 md:block md:w-auto flex items-start justify-between w-full">
                <Button size="sm" variant="ghost">
                    Privacy Policy
                </Button>
                <Button size="sm" variant="ghost">
                    Terms of Service
                </Button>
            </div>
            </div>
        </div>
    )
}