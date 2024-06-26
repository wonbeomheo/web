import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="bg-black py-8">
            <div className="container flex mx-auto justify-between item-center">
                <div></div>
                <Link className="text-5xl font-knewave text-white" to="/">RYAN</Link>
                <div></div>
            </div>
        </div>
    );
}

export default Header;