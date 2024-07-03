import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Skill from "./Skill";

type Props = {
    name: string,
    skills: string[]
}

const SkillSet = ({name, skills}: Props) => {
    return (
        <Card className="my-4">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription className="hidden"></CardDescription>
            </CardHeader>
            <CardContent>
                {
                    skills.map((value:string):React.ReactNode => {
                        return <Skill key={value} name={value}/>;
                    })
                }
            </CardContent>
        </Card>
    );
}

export default SkillSet