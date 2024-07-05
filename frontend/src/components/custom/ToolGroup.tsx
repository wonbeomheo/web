import { Button } from "../ui/button";
import upArrow from "../../assets/angle-up-solid.svg";
import { useEffect, useState } from "react";


const ToolGroup = () => {
    const [ isVisible, setIsVisible ] = useState();
    const [ height, setHeight ] = useState();
    
    const scrollToTopSmooth = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const listenToScroll = () => {
        const heightToHide = document.getElementById('about')?.scrollHeight;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);

        console.log("winScroll: " + winScroll);
        console.log("heightToHide: " + heightToHide);
        
        if ( winScroll > heightToHide ) {
            setIsVisible(true);
        } else {
            isVisible && setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    });

    return (
        <>
            {
                isVisible &&
                <div className="fixed right-4 bottom-4 rounded-full w-16 h-16 bg-white">
                    <Button onClick={scrollToTopSmooth} className="w-full h-full bg-black/80 border-black rounded-full border-0 ease-in-out duration-500">
                        <img className="scale-75" src={upArrow} />
                    </Button>
                </div>
            }
        </>
    );
}

export default ToolGroup