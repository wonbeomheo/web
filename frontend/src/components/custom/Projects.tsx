import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const Projects = () => {
    return (
        <div id="projects" className="p-10 h-screen w-screen bg-gradient-to-b from-black via-black/60 to-black justify-center items-center">
            <div className="text-6xl font-oswald font-bold text-white">Projects</div>
            <ScrollArea className="w-full flex flex-row whitespace-nowrap" scrollHideDelay={50}>
                <div className="flex flex-row w-full">
                    <Card className="my-10 mx-4 w-64 border-red-800 border-4">
                        <CardHeader>
                            <CardTitle>
                                MEdge
                            </CardTitle>
                            <CardDescription>Full Stack Development</CardDescription>
                        </CardHeader>
                        <CardContent className="overflow-scroll">
                            Backend: Django, Dango REST framework, ORM, MySQL, KVM (libvirt), Docker<br/>
                            Frontend: CSS, JavaScript, JQuery (AJAX), Django Template language
                        </CardContent>
                    </Card>
                    <Card className="my-10 mx-4 w-64">
                        <CardHeader>
                            <CardTitle>
                                CEdge - UI/UX
                            </CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent>
                            Backend: adffsdaf<br/>
                            Frontend: adfadf
                        </CardContent>
                    </Card>
                    <Card className="my-10 mx-4 w-64">
                        <CardHeader>
                            <CardTitle>
                                MEdge
                            </CardTitle>
                            <CardDescription>Cloud Computing Project</CardDescription>
                        </CardHeader>
                        <CardContent>
                            Backend: adffsdaf<br/>
                            Frontend: adfadf
                        </CardContent>
                    </Card>
                    <Card className="my-10 mx-4 w-64">
                        <CardHeader>
                            <CardTitle>
                                MEdge
                            </CardTitle>
                            <CardDescription>Cloud Computing Project</CardDescription>
                        </CardHeader>
                        <CardContent>
                            Backend: adffsdaf<br/>
                            Frontend: adfadf
                        </CardContent>
                    </Card>
                    <Card className="my-10 mx-4 w-64">
                        <CardHeader>
                            <CardTitle>
                                MEdge
                            </CardTitle>
                            <CardDescription>Cloud Computing Project</CardDescription>
                        </CardHeader>
                        <CardContent>
                            Backend: adffsdaf<br/>
                            Frontend: adfadf
                        </CardContent>
                    </Card>
                    <ScrollBar orientation="horizontal" />
                </div>
            </ScrollArea>
            <Card className="w-full h-[50vh] bg-gradient-to-b from-black/50 to-black/80 rounded-md border-0">

            </Card>
        </div>        
    );
}

export default Projects