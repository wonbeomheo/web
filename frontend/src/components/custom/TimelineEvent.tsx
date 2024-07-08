import horizontalTimeline from "../../assets/horizontal-timeline.svg";
import verticalTimeline from "../../assets/vertical-timeline.svg";

type Props = {
    title: string,
    fromYear: number,
    fromMonth?: number,
    toYear?: number,
    toMonth?: number,
    current: boolean,
    company: string,
}

const TimelineEvent = ({title, fromYear, fromMonth, toYear, toMonth, current=false, company}: Props) => {
    return (
        <>
        <div className="flex flex-col md:flex-row font-oswald h-fit md:h-32 md:min-w-full justify-start items-start">
            <div className="hidden md:flex items-start">
                <img src={verticalTimeline} />
            </div>
            <div className="flex flex-row md:hidden">
                <img src={horizontalTimeline} />
            </div>
            <div className="flex flex-col bg-white/20 ml-4 md:m-10 rounded-md px-4 py-2 h-24 w-48 md:w-full justify-center">
                <div className="text-xs lg:text-sm">
                    {fromYear}.{fromMonth} {current? "- current" : `- ${toYear}.${toMonth}`}
                </div>
                <div className="text-sm lg:text-lg font-bold">
                    {title}
                </div>
                <div className="text-xs lg:text-sm">
                    {company}
                </div>
            </div>
        </div>
        </>
    );
}

export default TimelineEvent;