import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import TimelineEvent from './TimelineEvent';

interface Experience {
    title: string
    fromYear: number
    fromMonth: number
    toYear: number
    toMonth: number
    current: boolean
    company: string
}

const experiences: Experience[] = [
    {
        title: "Junior Software Developer",
        fromYear: 2022,
        fromMonth: 5,
        toYear: 2024,
        toMonth: 7,
        current: false,
        company: "ClassAct, KOR"
    },
    {
        title: "Sushi Cook",
        fromYear: 2020,
        fromMonth: 3,
        toYear: 2022,
        toMonth: 1,
        current: false,
        company: "Bento, CAN"
    },
    {
        title: "Sales Representative",
        fromYear: 2017,
        fromMonth: 1,
        toYear: 2017,
        toMonth: 8,
        current: false,
        company: "i-Collection, AUS"
    },
    {
        title: "BSc/MSc in Engineering",
        fromYear: 2012,
        fromMonth: 2,
        toYear: 2016,
        toMonth: 12,
        current: false,
        company: "University of Queensland, AUS"
    },
]

const Timeline = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <ScrollArea className="h-[20vh] md:h-[60vh] w-full md:w-[300px] lg:w-[330px]" scrollHideDelay={0}>
                <div className="flex flex-row md:flex-col">
                    {experiences.map((experience) => (
                        <TimelineEvent 
                            title={experience.title} fromYear={experience.fromYear} fromMonth={experience.fromMonth}
                            toYear={experience.toYear} toMonth={experience.toMonth} current={experience.current} 
                            company={experience.company} />
                    ))}
                </div>
                <ScrollBar className="md:hide" orientation="horizontal" />
            </ScrollArea>
            <div className="">
                Details
            </div>
        </div>
    );
}

export default Timeline;