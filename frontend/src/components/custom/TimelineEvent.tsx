type Props = {
    title: string,
    fromYear: number,
    fromMonth?: number,
    toYear?: number,
    toMonth?: number,
    description: string,
    current: boolean,
    company: string,
}

const TimelineEvent = ({title, fromYear, fromMonth, toYear, toMonth, description, current=false, company}: Props) => {
    return (
        <div className="flex font-oswald">
            <div className="inset-0 hidden md:flex">
                <svg width="38" height="247" viewBox="0 0 38 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0L18.9997 247" stroke="white" strokeWidth="3"/>
                    <circle cx="19" cy="61" r="12" fill="#991b1b" stroke="white" strokeWidth="7"/>
                </svg>
            </div>
            <div className="inset-0 flex md:hidden">
                <svg width="38" height="180" viewBox="0 0 38 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0L18.9997 247" stroke="white" strokeWidth="3"/>
                    <circle cx="19" cy="61" r="12" fill="#991b1b" stroke="white" strokeWidth="7"/>
                </svg>
            </div>
            <div className="flex-col bg-white/20 m-10 rounded-md min-w-96 px-4 py-2">
                <div>
                    {fromYear}.{fromMonth} {current? "- current" : `- ${toYear}.${toMonth}`}
                </div>
                <div>
                    {title}
                </div>
                <div>
                    {company}
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default TimelineEvent;