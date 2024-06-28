import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import SkillSet from "./SkillSet";



const Skills = () => {
    return (
        <div id="skills" className="bg-black h-screen p-10">
            <Card className="h-full p-4 md:p-8 border-0 bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-md text-white">
                <CardHeader>
                    <CardTitle className="flex font-oswald text-4xl md:text-6xl">Skills</CardTitle>
                    <CardDescription className="text-white text-l md:text-xl">
                        Development and Soft Skills
                    </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                    <SkillSet name="Backend" skills={["NodeJS", "Dango Framework", "Spring Framework"]} />
                    <SkillSet name="Frontend" skills={["React","HTML/CSS/Javascript","Typescript"]} />
                </CardContent>
            </Card>
        </div>
    );
}

export default Skills