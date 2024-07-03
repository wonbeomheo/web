import Header from "../components/custom/Header";
import downArrow from "../assets/arrow-down.svg"
import About from "../components/custom/About";
import Skills from "../components/custom/Skills";
import { Link } from "react-scroll";
import Projects from "../components/custom/Projects";
import Contact from "../components/custom/Contact";

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="container flex-1 pt-10 pb-10 md:pb-20 min-h-fit">{children}</div>
            <div className="bg-black pt-8 pb-20 flex justify-center items-center text-white">
                <Link to="about" spy={true} smooth={true} duration={500}>
                    <img className="scale-150" src={downArrow} />
                </Link>
            </div>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
    
}

export default Layout;