import main from "../../assets/main.png";

const Hero = () => {
    return (
        <div className="flex justify-center">
            <img className="scale-75 md:scale-100" src={main} alt="Ryan and his family" />
            <p className="absolute landing-title text-black text-4xl md:text-9xl font-knewave translate-y-56 text-outline-enabled">Software Developer</p>
        </div>
    );
}

export default Hero