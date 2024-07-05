import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../components/ui/button";

const Login = () => {
    const {loginWithRedirect } = useAuth0();
    
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-black">
            <Card className="w-96 h-[300px] bg-gradient-to-b from-black/50 to-black/80 border-0 text-white font-oswald text-2xl mt-32">
                <CardHeader>
                    <CardTitle>
                        Admin Log In
                    </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader> 
                <CardContent className="flex justify-center items-center">
                    <Button
                        size="lg"
                        onClick={async () => {
                            await loginWithRedirect();
                        }}
                    >Log In</Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login