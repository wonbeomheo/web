import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../components/ui/navigation-menu";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const AdminLayout = ({children}: Props) => {
    return (
        <div className="flex bg-black w-screen h-screen text-white">
            <div className="flex-col w-52 text-center border-r-2 border-red-800 justify-center items-center">
                <div className="p-8 font-knewave text-2xl text-center">Ryan</div>
                <NavigationMenu 
                    className="flex-col min-w-full mt-32 list-none"
                >
                    <Link to="skills" className="min-w-full">
                        <NavigationMenuItem 
                            className="p-4 my-2 hover:bg-red-800 ease-in-out duration-500"
                        >
                            <NavigationMenuLink className="">Skills</NavigationMenuLink>
                        </NavigationMenuItem>
                    </Link>
                    <Link to="projects" className="min-w-full">
                        <NavigationMenuItem 
                            className="p-4 my-2 hover:bg-red-800 ease-in-out duration-500"
                        >
                            <NavigationMenuLink className="">Projects</NavigationMenuLink>
                        </NavigationMenuItem>
                    </Link>
                    <Link to="contact" className="min-w-full">
                        <NavigationMenuItem 
                            className="p-4 my-2 hover:bg-red-800 ease-in-out duration-500"
                        >
                            <NavigationMenuLink className="">Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                    </Link>
                </NavigationMenu>
            </div>
            <div className="w-full">{children}</div>
        </div>
    );
}

export default AdminLayout