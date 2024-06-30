import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../components/ui/button";

const schema = z
    .object({
        username: z
            .string()
            .min(2, "User ID must be at least 2 characters.")
            .max(50, "User ID cannot be longer than 50 characters."),
        password: z
            .string(
                {required_error: "Required"}
            )
            .min(8, "Password must be longer than 8 characters.")
    })

const Login = () => {
    const {loginWithRedirect } = useAuth0();
    
    return (
        <div className="flex justify-center items-center">
            <Card className="w-96 h-[300px] bg-gradient-to-b from-black/50 to-black/80 border-0 text-white font-oswald text-2xl mt-32">
                <CardHeader>
                    <CardTitle>
                        Admin Login
                    </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader> 
                    <Button
                        onClick={async () => {
                            await loginWithRedirect();
                        }}
                    >Login</Button>
                <CardContent>

                </CardContent>
            </Card>
        </div>
    );
}

export default Login