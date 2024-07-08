import { Button } from "../ui/button";
import upArrow from "../../assets/angle-up-solid.svg";
import { useEffect, useState } from "react";


const ToolGroup = () => {
    const [ isVisible, setIsVisible ] = useState<boolean | null>();
    const [ height, setHeight ] = useState<number | null>();
    
    const scrollToTopSmooth = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const listenToScroll = ():void => {
        const heightToHide:number|undefined = document.getElementById('about')?.scrollHeight;
        const winScroll:number = document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);

        if (typeof(heightToHide) !== 'undefined') {
            if ( winScroll > heightToHide ) {
                setIsVisible(true);
            } else {
                isVisible && setIsVisible(false);
            }
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