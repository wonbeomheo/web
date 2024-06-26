import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
    const [menuOn, setMenuOn] = useState(false);

    return (
        <div onMouseLeave={() => {setMenuOn(() => {return false;})}}>
            <div className="z-10 bg-black">
                <div 
                    className="container flex-col mx-auto text-white"
                >
                    <div 
                        className="flex justify-between md:justify-center item-center"
                        onMouseEnter={() => {setMenuOn(() => {return true;});}}
                    >
                        <div className="flex w-6 md:hidden"></div>
                        <Link className="text-4xl md:text-5xl font-knewave py-8" to="/">RYAN</Link>
                        <div className="flex align-middle md:hidden"><MobileNav/></div>
                    </div>
                </div>
            </div>
            <div 
                className={`hidden md:flex overflow-hidden`}
            >
                <div className={`flex pb-8 min-w-full text-white text-xl font-oswald bg-black container mx-auto justify-around item-center duration-150${menuOn? "" : " -translate-y-20"}`}>
                    <a className="content-center" href="#about">About</a>
                    <a className="content-center" href="#skills">Skills</a>
                    <a className="content-center" href="#projects">Projects</a>
                    <a className="content-center" href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Header;