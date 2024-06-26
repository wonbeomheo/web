import Header from "../components/custom/Header";

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="container flex-1 py-10 min-h-fit">{children}</div>
            <div className="bg-black py-8 flex justify-center items-center text-white">
            </div>
        </div>
    )
    
}

export default Layout;