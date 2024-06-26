import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent 
                className="w-[150px] bg-black border-red-800 border-l-2 pt-20 font-oswald"
            >
                <SheetTitle className="hidden"></SheetTitle>
                <SheetDescription className="hidden"></SheetDescription>
                <SheetClose className="flex text-white text-2xl my-2"><a href="#about">About</a></SheetClose>
                <SheetClose className="flex text-white text-2xl my-2"><a href="#skills">Skills</a></SheetClose>
                <SheetClose className="flex text-white text-2xl my-2"><a href="#projects">Projects</a></SheetClose>
                <SheetClose className="flex text-white text-2xl my-2"><a href="#contact">Contact</a></SheetClose>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;