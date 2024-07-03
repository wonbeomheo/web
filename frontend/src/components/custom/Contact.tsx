import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Contact = () => {
    return (
        <div id="contact" className="p-10 w-screen h-screen bg-black">
            <Card className="h-full border-0 bg-gradient-to-b from-black/70 to-black/90 text-white font-oswald">
                <CardHeader>
                    <CardTitle className="text-6xl">Contact</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col">
                        <label htmlFor="name" className="my-2 mr-4">Name</label>
                        <input id="name" type="text" className="my-2 rounded-sm bg-gray-300 border-0 outline-red-800 outline-1"></input>
                        <label htmlFor="email" className="my-2 mr-4">Email</label>
                        <input id="email" type="text" className="my-2 rounded-sm bg-gray-300 border-0 outline-red-800 outline-1"></input>
                        <label htmlFor="content" className="my-2">Content</label>
                        <textarea id="content" className="rounded-sm h-[30vh] bg-gray-300"></textarea>
                    </form>
                    <Button className="mt-4">Submit</Button>
                    <div className="mt-4">
                        <a href="https://www.github.com/wonbeomheo">GitHub</a>
                        <a href="https://www.linkedin.com/in/wonbeom-heo-ryan">LinkedIn</a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Contact