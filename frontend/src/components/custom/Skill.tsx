import { Progress } from "../ui/progress";

type Props = {
    name: string
}

const Skill = ({name}: Props) => {
    return (
        <div className="flex items-center">
            <div className="w-52">
                {name}         
            </div>
            <Progress className="w-full" value={30}/>
        </div>
    );
}

export default Skill