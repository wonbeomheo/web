import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Timeline from "./Timeline";

const About = () => {
    return (
        <div id="about" className="bg-black min-h-screen p-10">
            <Card className="p-4 md:p-8 border-0 bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-md text-white">
                <CardHeader>
                    <CardTitle className="flex font-oswald text-4xl md:text-6xl">About</CardTitle>
                    <CardDescription className="text-white text-l md:text-xl">
                        Ryan W. Heo - Software Developer
                    </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                    <Timeline/>
                </CardContent>
            </Card>
        </div>
    );
}

export default About;