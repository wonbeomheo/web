import { ScrollArea } from '../ui/scroll-area';
import TimelineEvent from './TimelineEvent';

const Timeline = () => {
    return (
        <div className="flex">
            <ScrollArea className="w-96 max-h-96 md:w-[500px] md:h-[600px]" scrollHideDelay={0}>
                <TimelineEvent 
                    title="Junior Software Developer" fromYear={2022} fromMonth={5} 
                    toYear={2024} toMonth={6} current={true} description={''} company='ClassAct'
                />
                <TimelineEvent 
                    title="Sushi Cook" fromYear={2020} fromMonth={3} 
                    toYear={2022} toMonth={1} current={false} description={''} company='Bento'
                />
                <TimelineEvent 
                    title="Sales Representative" fromYear={2017} fromMonth={1} 
                    toYear={2017} toMonth={8} current={false} description={''} company='i-Collection'
                />
                <TimelineEvent 
                    title="Bachelor and Master of Electrical Engineering" fromYear={2012} fromMonth={2} 
                    toYear={2016} toMonth={12} current={false} description={''} company='The University of Queensland'
                />
            </ScrollArea>
            <div className="hidden md:flex-col p-4">
                <div className="font-bold text-2xl">Details</div>
            </div>
        </div>
    );
}

export default Timeline;