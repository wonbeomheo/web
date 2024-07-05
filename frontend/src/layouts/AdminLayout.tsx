import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "../components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
    children: React.ReactNode
}

const AdminLayout = ({children}: Props) => {
    const {user, isAuthenticated, logout, loginWithRedirect} = useAuth0();

    return (
        <div className="flex bg-black w-screen h-screen text-white">
            <div className="flex-col w-52 text-center border-r-2 border-red-800 justify-center items-center">
                <div className="p-8 font-knewave text-2xl text-center">Ryan</div>
                <div className="h-32">
                    <div className="font-oswald text-xs text-center">{user?.email}</div>
                    {isAuthenticated ? (
                        <Button onClick={() => {logout()}} className="font-oswald mt-2">Log Out</Button>
                    ) : (
                        <Button onClick={() => {loginWithRedirect()}} className="font-oswald">Log In</Button>
                    )}
                </div>
                <NavigationMenu 
                    className="flex-col min-w-full mt-10 list-none"
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